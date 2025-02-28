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
import { getAutoCompleteItemsFromFile } from "./ast";
const file: string = `
extend component pss_top {
 import my_mem_ops_c::*;
 action stress_xfer {
 activity {
 schedule {
 do my_mem_ops_c::write_data;
 do my_mem_ops_c::write_data;
 }
 repeat (5) {
 do my_mem_ops_c::copy_data;
 }
 schedule {
 do my_mem_ops_c::read_check_data;
 do my_mem_ops_c::read_check_data;
 }
 }
 }
}
`;
getAutoCompleteItemsFromFile(file);