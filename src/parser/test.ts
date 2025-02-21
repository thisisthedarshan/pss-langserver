import { getAutoCompleteItemsFromFile } from "./ast";
const file: string = `
/**
 * @file usb_execs.pss
 * ===========================================================================
 * USB Host - Execs
 * ===========================================================================
 * This file contains the execs blocks of USB host
 * ===========================================================================
 */
import usb_io_pkg::*;
import addr_reg_pkg::*;
import std_pkg::*;
import usb_func_def::*;

extend component usb_xHCI_c {


    extend action usb_hc_reset_controller_a {
        exec body {
            comp.usb_hc_reset();
        }
    }

    extend action enable_device_slots_a {
        exec body {
            comp.enable_device_slots();
        }
    };




    extend action start_stop_usb_a {
        exec body {
            comp.usb_host_toggle(hcd_data_in.hcd_cfg.run_stop);
        }
    }

    extend action usb_hc_reset_port_a {
        exec body {
            comp.usb_reset_port();
        }
    }

    extend action usb_set_link_state_a {
        exec body {
            comp.set_link_state((bit[4])hcd_data_in.hcd_cfg.link_state);
        }
    }

    extend action usb_hc_suspend_device_a {
        exec body {
            comp.set_link_state((bit[4])xhci_port_status_e::U3_SUSPEND);
        }
    }

    extend action usb_hc_resume_device_a {
        exec body {
            comp.usb_resume_device();
        }
    }

    extend action usb_hc_enter_u1_state_a {
        exec body {
            comp.set_link_state((bit[4])xhci_port_status_e::U1_IDLE);
        }
    }

    extend action usb_hc_enter_u2_state_a {
        exec body {
            comp.set_link_state((bit[4])xhci_port_status_e::U2_IDLE);
        }
    }


    extend action usb_hc_enable_remote_wakeup_a {
        activity {
        }
    }

	 

    extend action usb_hc_init_a {
        exec post_solve {
            // storing ring details for cmd_ring in host_resource
            host_resource.ring_detail_map[(int)mem_type_e::CMD] = comp.generate_ring_details(claim_cmd_ring);
            // storing ring details for event_ring in host_resource
            host_resource.ring_detail_map[(int)mem_type_e::EVENT] = comp.generate_ring_details(claim_event_ring);

            // storing ring details of all transfer_rings in host_resource
            repeat(i:TOTAL_TRANS_RINGS) {
                host_resource.ring_detail_map[((int)mem_type_e::TRANS_1 + i)] = comp.generate_ring_details(claim_trans_ring , (i * 65536));
            }

            /*
            // printing ring_detail_map of host resource
            repeat(i:37) {
            print(" % d\n", i);
            print(" %s %x %s %x\n", "enq:", host_resource.ring_detail_map[i].enq, "deq:", host_resource.ring_detail_map[i].deq);
            }
             */

        }

        exec body {

            // configuring cmd_ring_ptr in crcr register
            comp.op_regs.crcr.write_field("cmd_ring_ptr", (host_resource.ring_detail_map[(int)mem_type_e::CMD].deq >> 6));
            // configuring rcs flag of crcr register
            comp.op_regs.crcr.write_field("rcs", host_resource.ring_detail_map[(int)mem_type_e::CMD].pcs);
            // adding link trb at the end of cmd_ring
            comp.insert_link_trb(host_resource.ring_detail_map[(int)mem_type_e::CMD], 0, 1, 0);

            // creating event ring segment table
            comp.create_erst();
            // configuring xhci physical registers to initial value
            comp.set_erst_runtime_reg(0);

            // inserting link_trb at the end of all transfer rings
            repeat(i:31) {
                comp.insert_link_trb(host_resource.ring_detail_map[((int)mem_type_e::TRANS_1 + i)], 0, 1, 0);
            }

            // configuring the dcbaap register to point the base address of dcbaa
            comp.op_regs.dcbaap.write_field("dcbaa_ptr", (DCBAA_BASE_ADDR >> 6));
        }
	  
    }

	 

    extend action usb_hc_enqueue_trb_a {

        exec body {
            // pushing the trb into cmd or transfer ring
            // and updating the ring details of host resource
            host_resource.ring_detail_map[(int)mem_type] = comp.enqueue_trb(host_resource.ring_detail_map[(int)mem_type], in_trb.trb);
        }

    }


    extend action usb_hc_dequeue_trb_a {

        exec body {
            /*
             * Procedure to dequeue trb
             * - check the ownership (i.e. compare the ccs with trb cycle state)
             * - dequeue the trb
             * - update the ring_details
             * - after reading all trb, update the xhci erdp register
             */

            // check whether the consumer owns the trb
            if (host_resource.ring_detail_map[(int) mem_type].ccs == comp.read_cycle_state(host_resource.ring_detail_map[(int) mem_type].deq)) {
                // dequeue the trb
                deq_status = comp.dequeue_trb(host_resource.ring_detail_map[(int)mem_type]);

                // update the ring details
                host_resource.ring_detail_map[(int)mem_type].deq = deq_status.deq;
                host_resource.ring_detail_map[(int)mem_type].ccs = deq_status.ccs;

                // output the trb to the buffer
                out_trb.trb = deq_status.curr_trb;

                // update the xhci erdp register
                // **Check: It's writing erdp every time we deq using this action
                comp.write_xhci_erdp((host_resource.ring_detail_map[(int)mem_type].deq >> 4), (bit[3]) (deq_status.ERST_count && 0x7));
            }
        }

    }

    extend action usb_hc_device_init_a {
        exec body {
	    bit[8] port_id = 0;
	    bit[8] slot_id = 0;
	    bool port_attach = false;

	    // this loop will run until a device is attached.
            repeat {
		    // checking for the trb ownership (in event ring)
		    if (host_resource.ring_detail_map[(int) mem_type_e::EVENT].ccs == comp.read_cycle_state(host_resource.ring_detail_map[(int) mem_type_e::EVENT].deq)) {
			    // dequeue the trb
			    deq_return_s deq_status = comp.dequeue_trb(host_resource.ring_detail_map[(int) mem_type_e::EVENT]);
			    // update the event ring details
			    host_resource.ring_detail_map[(int) mem_type_e::EVENT].deq = deq_status.deq;
			    host_resource.ring_detail_map[(int) mem_type_e::EVENT].ccs = deq_status.ccs;
			    // update the erdp register
			    comp.write_xhci_erdp((host_resource.ring_detail_map[(int)mem_type_e::EVENT].deq >> 4), (bit[3]) (deq_status.ERST_count && 0x7));
			    
			    // read the port id
			    port_id = comp.get_port_id(deq_status.curr_trb);
			    // detect the attach
			    port_attach = (port_id != 0) ? comp.is_port_attached(port_id) : false;
			    
		    }
            } while (port_attach == false);

            // the attach scenario
            // In USB 3.2, the port should reach the enable state (U0)

            // create a enable slot command trb
            trb_s enable_slot_cmd_trb = comp.create_enable_slot_cmd_trb(host_resource.ring_detail_map[(int) mem_type_e::CMD].pcs);
            // enq that into the cmd ring
	    host_resource.ring_detail_map[(int) mem_type_e::CMD] = comp.enqueue_trb(host_resource.ring_detail_map[(int) mem_type_e::CMD], enable_slot_cmd_trb);
	    // ring cmd ring doorbell
	    comp.ring_doorbell(0);

	    // wait for command completion trb at event ring
            repeat {
		    if (host_resource.ring_detail_map[(int) mem_type_e::EVENT].ccs == comp.read_cycle_state(host_resource.ring_detail_map[(int) mem_type_e::EVENT].deq)) {
			    deq_return_s deq_status = comp.dequeue_trb(host_resource.ring_detail_map[(int) mem_type_e::EVENT]);
			    host_resource.ring_detail_map[(int) mem_type_e::EVENT].deq = deq_status.deq;
			    host_resource.ring_detail_map[(int) mem_type_e::EVENT].ccs = deq_status.ccs;

			    comp.write_xhci_erdp((host_resource.ring_detail_map[(int)mem_type_e::EVENT].deq >> 4), (bit[3]) (deq_status.ERST_count && 0x7));
			    // read the allocated slot id
			    slot_id = comp.get_slot_id(deq_status.curr_trb);

		    }
            } while (slot_id == 0);


        }
    }
}`;
getAutoCompleteItemsFromFile(file);