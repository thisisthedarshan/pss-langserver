/*
 * Copyright (C) 2025 Darshan(@thisisthedarshan)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { buildAutocompletionBlock } from "../providers/autoCompletionProvider";
import { buildAST, buildASTNew } from "./ast";
import { writeFileSync } from "fs-extra";
const file: string = `
component pss_top {
    action stress_x__filenamefer {
        activity {
            schedule {
                do my_mem_ops_c ::write_data;
                do my_mem_ops_c ::write_data;
            }
            repeat (5) {
                do my_mem_ops_c::copy_data;
            }
            schedule {
                do my_mem_ops_c ::read_check_data;
                do my_mem_ops_c ::read_check_data;
            }
        }
    }
    action recv_xfer {
    }
}
`;
let out = buildAST("", file);
out.map(astObj => {
  Object.entries(astObj).map(([keyword, info]) => {
    console.log(keyword, info)
  })
})

let autocompletion = buildAutocompletionBlock(out)

autocompletion.map(astObj => {
  console.log(astObj)
});

const newObjs = buildASTNew(__filename, file);
writeFileSync(__filename + '.json', JSON.stringify(newObjs, null, 4), 'utf-8');