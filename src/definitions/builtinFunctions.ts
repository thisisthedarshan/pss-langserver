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

export const builtInSignatures = {
  /* std_pkg Functions (Annex C.1) */
  "format": {
    signature: "solve function string format(string format_str, type... args)",
    documentation: "Formats a string using a format specification and variable arguments, similar to C-style printf. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "format_str", documentation: "A string with format specifiers (e.g., %d, %s) defining the output structure." },
      { label: "...args", documentation: "Variable arguments matching the format specifiers in format_str." }
    ],
    package: "std_pkg"
  },
  "print": {
    signature: "solve function void print(string format_str, type... args)",
    documentation: "Prints a formatted string to the default output (e.g., console), using a format specification. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "format_str", documentation: "A string with format specifiers (e.g., %d, %s) for formatting the output." },
      { label: "...args", documentation: "Variable arguments to be formatted and printed." }
    ],
    package: "std_pkg"
  },
  "message": {
    signature: "target function void message(message_verbosity_e vrb_level, string format_str, type... args)",
    documentation: "Outputs a formatted message to the target platform’s logging system with a specified verbosity level, useful for debugging or reporting. Available only on the target platform (Annex C.1).",
    parameters: [
      { label: "vrb_level", documentation: "Verbosity level enum: NONE, LOW, MEDIUM, HIGH, FULL, controlling message visibility." },
      { label: "format_str", documentation: "A string with format specifiers defining the message structure." },
      { label: "...args", documentation: "Variable arguments to populate the format string." }
    ],
    package: "std_pkg"
  },
  "file_open": {
    signature: "solve function file_handle_t file_open(string filename, file_option_e opt)",
    documentation: "Opens a file with the specified name and mode, returning a file handle for subsequent operations. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "filename", documentation: "Path to the file to open." },
      { label: "opt", documentation: "File mode enum: TRUNCATE (overwrite), APPEND (add to end), READ (read-only)." }
    ],
    package: "std_pkg"
  },
  "file_close": {
    signature: "solve function void file_close(file_handle_t file_handle)",
    documentation: "Closes an open file handle, releasing associated resources. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "file_handle", documentation: "Handle of the file to close, obtained from file_open." }
    ],
    package: "std_pkg"
  },
  "file_exists": {
    signature: "solve function bool file_exists(string filename)",
    documentation: "Checks if a file exists at the specified path, returning true if it does, false otherwise. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "filename", documentation: "Path to the file to check." }
    ],
    package: "std_pkg"
  },
  "file_write": {
    signature: "solve function void file_write(file_handle_t file_handle, string format_str, type... args)",
    documentation: "Writes a formatted string to an open file identified by the file handle. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "file_handle", documentation: "Handle of the file to write to, from file_open." },
      { label: "format_str", documentation: "A string with format specifiers for the data to write." },
      { label: "...args", documentation: "Variable arguments matching the format specifiers." }
    ],
    package: "std_pkg"
  },
  "file_read": {
    signature: "solve function string file_read(file_handle_t file_handle, int size = -1)",
    documentation: "Reads data from an open file, returning it as a string; reads up to 'size' bytes or all if size is -1. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "file_handle", documentation: "Handle of the file to read from, from file_open." },
      { label: "size", documentation: "Maximum bytes to read; -1 reads entire file (default)." }
    ],
    package: "std_pkg"
  },
  "file_write_lines": {
    signature: "solve function void file_write_lines(string filename, list<string> lines, file_option_e opt)",
    documentation: "Writes a list of strings as lines to a file, opening it with the specified mode. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "filename", documentation: "Path to the file to write." },
      { label: "lines", documentation: "List of strings, each written as a line." },
      { label: "opt", documentation: "File mode enum: TRUNCATE (overwrite), APPEND (add to end)." }
    ],
    package: "std_pkg"
  },
  "file_read_lines": {
    signature: "solve function list<string> file_read_lines(string filename)",
    documentation: "Reads all lines from a file and returns them as a list of strings. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "filename", documentation: "Path to the file to read." }
    ],
    package: "std_pkg"
  },
  "error": {
    signature: "function void error(string format_str, type... args)",
    documentation: "Outputs a formatted error message to the target platform’s error stream, typically for recoverable errors (Annex C.1).",
    parameters: [
      { label: "format_str", documentation: "A string with format specifiers for the error message." },
      { label: "...args", documentation: "Variable arguments to format the error message." }
    ],
    package: "std_pkg"
  },
  "fatal": {
    signature: "function void fatal(int status, string format_str, type... args)",
    documentation: "Outputs a formatted fatal error message and terminates execution with the specified status code (Annex C.1).",
    parameters: [
      { label: "status", documentation: "Exit status code returned to the environment." },
      { label: "format_str", documentation: "A string with format specifiers for the fatal message." },
      { label: "...args", documentation: "Variable arguments to format the fatal message." }
    ],
    package: "std_pkg"
  },
  "urandom": {
    signature: "solve function bit[32] urandom()",
    documentation: "Generates a 32-bit unsigned random number using a uniform distribution. Available only on the solve platform (Annex C.1).",
    parameters: [],
    package: "std_pkg"
  },
  "urandom_range": {
    signature: "solve function bit[32] urandom_range(bit[32] min, bit[32] max)",
    documentation: "Generates a 32-bit unsigned random number within the inclusive range [min, max]. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "min", documentation: "Minimum value of the random range (inclusive)." },
      { label: "max", documentation: "Maximum value of the random range (inclusive)." }
    ],
    package: "std_pkg"
  },
  "log": {
    signature: "solve function float64 log(float64 x)",
    documentation: "Computes the natural logarithm (base e) of a 64-bit floating-point number. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value (must be positive)." }
    ],
    package: "std_pkg"
  },
  "log10": {
    signature: "solve function float64 log10(float64 x)",
    documentation: "Computes the base-10 logarithm of a 64-bit floating-point number. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value (must be positive)." }
    ],
    package: "std_pkg"
  },
  "exp": {
    signature: "solve function float64 exp(float64 x)",
    documentation: "Computes e raised to the power of a 64-bit floating-point number. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Exponent value." }
    ],
    package: "std_pkg"
  },
  "sqrt": {
    signature: "solve function float64 sqrt(float64 x)",
    documentation: "Computes the square root of a 64-bit floating-point number. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value (must be non-negative)." }
    ],
    package: "std_pkg"
  },
  "pow": {
    signature: "solve function float64 pow(float64 x, float64 y)",
    documentation: "Raises a 64-bit floating-point base (x) to a 64-bit floating-point exponent (y). Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Base value." },
      { label: "y", documentation: "Exponent value." }
    ],
    package: "std_pkg"
  },
  "round": {
    signature: "solve function float64 round(float64 x)",
    documentation: "Rounds a 64-bit floating-point number to the nearest integer value. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value to round." }
    ],
    package: "std_pkg"
  },
  "floor": {
    signature: "solve function float64 floor(float64 x)",
    documentation: "Computes the largest integer less than or equal to a 64-bit floating-point number. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value." }
    ],
    package: "std_pkg"
  },
  "ceil": {
    signature: "solve function float64 ceil(float64 x)",
    documentation: "Computes the smallest integer greater than or equal to a 64-bit floating-point number. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value." }
    ],
    package: "std_pkg"
  },
  "sin": {
    signature: "solve function float64 sin(float64 x)",
    documentation: "Computes the sine of a 64-bit floating-point angle in radians. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Angle in radians." }
    ],
    package: "std_pkg"
  },
  "cos": {
    signature: "solve function float64 cos(float64 x)",
    documentation: "Computes the cosine of a 64-bit floating-point angle in radians. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Angle in radians." }
    ],
    package: "std_pkg"
  },
  "tan": {
    signature: "solve function float64 tan(float64 x)",
    documentation: "Computes the tangent of a 64-bit floating-point angle in radians. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Angle in radians." }
    ],
    package: "std_pkg"
  },
  "asin": {
    signature: "solve function float64 asin(float64 x)",
    documentation: "Computes the arcsine (inverse sine) of a 64-bit floating-point value, returning radians. Available only on the solve platform (Annex\cC.1).",
    parameters: [
      { label: "x", documentation: "Input value in range [-1, 1]." }
    ],
    package: "std_pkg"
  },
  "acos": {
    signature: "solve function float64 acos(float64 x)",
    documentation: "Computes the arccosine (inverse cosine) of a 64-bit floating-point value, returning radians. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value in range [-1, 1]." }
    ],
    package: "std_pkg"
  },
  "atan": {
    signature: "solve function float64 atan(float64 x)",
    documentation: "Computes the arctangent (inverse tangent) of a 64-bit floating-point value, returning radians. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value." }
    ],
    package: "std_pkg"
  },
  "atan2": {
    signature: "solve function float64 atan2(float64 y, float64 x)",
    documentation: "Computes the arctangent of y/x, using signs to determine the quadrant, returning radians. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "y", documentation: "Y-coordinate." },
      { label: "x", documentation: "X-coordinate." }
    ],
    package: "std_pkg"
  },
  "hypot": {
    signature: "solve function float64 hypot(float64 x, float64 y)",
    documentation: "Computes the hypotenuse (sqrt(x² + y²)) of a right triangle with legs x and y. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Length of one leg." },
      { label: "y", documentation: "Length of the other leg." }
    ],
    package: "std_pkg"
  },
  "sinh": {
    signature: "solve function float64 sinh(float64 x)",
    documentation: "Computes the hyperbolic sine of a 64-bit floating-point value. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value." }
    ],
    package: "std_pkg"
  },
  "cosh": {
    signature: "solve function float64 cosh(float64 x)",
    documentation: "Computes the hyperbolic cosine of a 64-bit floating-point value. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value." }
    ],
    package: "std_pkg"
  },
  "tanh": {
    signature: "solve function float64 tanh(float64 x)",
    documentation: "Computes the hyperbolic tangent of a 64-bit floating-point value. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value." }
    ],
    package: "std_pkg"
  },
  "asinh": {
    signature: "solve function float64 asinh(float64 x)",
    documentation: "Computes the inverse hyperbolic sine of a 64-bit floating-point value. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value." }
    ],
    package: "std_pkg"
  },
  "acosh": {
    signature: "solve function float64 acosh(float64 x)",
    documentation: "Computes the inverse hyperbolic cosine of a 64-bit floating-point value (x >= 1). Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value (must be >= 1)." }
    ],
    package: "std_pkg"
  },
  "atanh": {
    signature: "solve function float64 atanh(float64 x)",
    documentation: "Computes the inverse hyperbolic tangent of a 64-bit floating-point value (x in (-1, 1)). Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "x", documentation: "Input value in range (-1, 1)." }
    ],
    package: "std_pkg"
  },
  "float_mantissa": {
    signature: "solve function bit[52] float_mantissa(float64 fv)",
    documentation: "Extracts the 52-bit mantissa from a 64-bit floating-point number in IEEE 754 format. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "fv", documentation: "64-bit floating-point value." }
    ],
    package: "std_pkg"
  },
  "float_exponent": {
    signature: "solve function bit[11] float_exponent(float64 fv)",
    documentation: "Extracts the 11-bit exponent from a 64-bit floating-point number in IEEE 754 format. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "fv", documentation: "64-bit floating-point value." }
    ],
    package: "std_pkg"
  },
  "float_sign": {
    signature: "solve function bit float_sign(float64 fv)",
    documentation: "Extracts the sign bit (0 or 1) from a 64-bit floating-point number in IEEE 754 format. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "fv", documentation: "64-bit floating-point value." }
    ],
    package: "std_pkg"
  },
  "to_float": {
    signature: "solve function float64 to_float(bit[52] mantissa, bit[11] exp, bit sign)",
    documentation: "Constructs a 64-bit floating-point number in IEEE 754 format from a mantissa, exponent, and sign bit. Available only on the solve platform (Annex C.1).",
    parameters: [
      { label: "mantissa", documentation: "52-bit mantissa value." },
      { label: "exp", documentation: "11-bit exponent value." },
      { label: "sign", documentation: "Sign bit (0 for positive, 1 for negative)." }
    ],
    package: "std_pkg"
  },

  /* addr_reg_pkg Functions (Annex C.3) */
  "make_handle_from_claim": {
    signature: "function addr_handle_t make_handle_from_claim(addr_claim_base_s claim, bit[64] offset = 0)",
    documentation: "Creates an address handle from an address claim structure, optionally offset by a 64-bit value (Annex C.3).",
    parameters: [
      { label: "claim", documentation: "Address claim structure defining the base address." },
      { label: "offset", documentation: "Optional 64-bit offset from the claim’s base address (default 0)." }
    ],
    package: "addr_reg_pkg"
  },
  "make_handle_from_handle": {
    signature: "function addr_handle_t make_handle_from_handle(addr_handle_t handle, bit[64] offset)",
    documentation: "Creates a new address handle by applying a 64-bit offset to an existing handle (Annex C.3).",
    parameters: [
      { label: "handle", documentation: "Existing address handle to offset from." },
      { label: "offset", documentation: "64-bit offset to apply to the existing handle." }
    ],
    package: "addr_reg_pkg"
  },
  "addr_value": {
    signature: "target function bit[64] addr_value(addr_handle_t hndl)",
    documentation: "Returns the 64-bit address value associated with an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle to query." }
    ],
    package: "addr_reg_pkg"
  },
  "addr_value_solve": {
    signature: "solve function bit[64] addr_value_solve(addr_handle_t hndl)",
    documentation: "Computes the 64-bit address value of an address handle during constraint solving. Available only on the solve platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle to evaluate." }
    ],
    package: "addr_reg_pkg"
  },
  "addr_value_abs": {
    signature: "solve function bit[64] addr_value_abs(addr_handle_t hndl)",
    documentation: "Returns the absolute 64-bit address value of an address handle, resolving any relative offsets. Available only on the solve platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle to evaluate." }
    ],
    package: "addr_reg_pkg"
  },
  "get_tag": {
    signature: "function string get_tag(addr_handle_t hndl)",
    documentation: "Retrieves the string tag associated with an address handle, used for identification (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle to query." }
    ],
    package: "addr_reg_pkg"
  },
  "read8": {
    signature: "target function bit[8] read8(addr_handle_t hndl)",
    documentation: "Reads an 8-bit value from the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." }
    ],
    package: "addr_reg_pkg"
  },
  "write8": {
    signature: "target function void write8(addr_handle_t hndl, bit[8] data)",
    documentation: "Writes an 8-bit value to the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." },
      { label: "data", documentation: "8-bit value to write." }
    ],
    package: "addr_reg_pkg"
  },
  "read16": {
    signature: "target function bit[16] read16(addr_handle_t hndl)",
    documentation: "Reads a 16-bit value from the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." }
    ],
    package: "addr_reg_pkg"
  },
  "write16": {
    signature: "target function void write16(addr_handle_t hndl, bit[16] data)",
    documentation: "Writes a 16-bit value to the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." },
      { label: "data", documentation: "16-bit value to write." }
    ],
    package: "addr_reg_pkg"
  },
  "read32": {
    signature: "target function bit[32] read32(addr_handle_t hndl)",
    documentation: "Reads a 32-bit value from the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." }
    ],
    package: "addr_reg_pkg"
  },
  "write32": {
    signature: "target function void write32(addr_handle_t hndl, bit[32] data)",
    documentation: "Writes a 32-bit value to the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." },
      { label: "data", documentation: "32-bit value to write." }
    ],
    package: "addr_reg_pkg"
  },
  "read64": {
    signature: "target function bit[64] read64(addr_handle_t hndl)",
    documentation: "Reads a 64-bit value from the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." }
    ],
    package: "addr_reg_pkg"
  },
  "write64": {
    signature: "target function void write64(addr_handle_t hndl, bit[64] data)",
    documentation: "Writes a 64-bit value to the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." },
      { label: "data", documentation: "64-bit value to write." }
    ],
    package: "addr_reg_pkg"
  },
  "read_bytes": {
    signature: "target function void read_bytes(addr_handle_t hndl, list<bit[8]> data, int size)",
    documentation: "Reads a specified number of bytes from an address handle into a list of 8-bit values. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the starting memory location." },
      { label: "data", documentation: "List to store the read 8-bit values." },
      { label: "size", documentation: "Number of bytes to read." }
    ],
    package: "addr_reg_pkg"
  },
  "write_bytes": {
    signature: "target function void write_bytes(addr_handle_t hndl, list<bit[8]> data)",
    documentation: "Writes a list of 8-bit values to the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the starting memory location." },
      { label: "data", documentation: "List of 8-bit values to write." }
    ],
    package: "addr_reg_pkg"
  },
  "read_struct": {
    signature: "target function void read_struct(addr_handle_t hndl, struct packed_struct)",
    documentation: "Reads a packed structure from the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." },
      { label: "packed_struct", documentation: "Packed structure to populate with read data." }
    ],
    package: "addr_reg_pkg"
  },
  "write_struct": {
    signature: "target function void write_struct(addr_handle_t hndl, struct packed_struct)",
    documentation: "Writes a packed structure to the memory location specified by an address handle. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "hndl", documentation: "Address handle pointing to the memory location." },
      { label: "packed_struct", documentation: "Packed structure containing data to write." }
    ],
    package: "addr_reg_pkg"
  },
  "read": {
    signature: "target function R read()",
    documentation: "Reads the full value of a register type R, typically used in register definitions. Available only on the target platform (Annex C.3).",
    parameters: [],
    package: "addr_reg_pkg"
  },
  "write": {
    signature: "target function void write(R r)",
    documentation: "Writes a full value to a register type R, typically used in register definitions. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "r", documentation: "Register value to write." }
    ],
    package: "addr_reg_pkg"
  },
  "read_val": {
    signature: "target function bit[SZ] read_val()",
    documentation: "Reads a bit vector of size SZ from a register, used for partial register access. Available only on the target platform (Annex C.3).",
    parameters: [],
    package: "addr_reg_pkg"
  },
  "write_val": {
    signature: "target function void write_val(bit[SZ] r)",
    documentation: "Writes a bit vector of size SZ to a register, used for partial register access. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "r", documentation: "Bit vector of size SZ to write." }
    ],
    package: "addr_reg_pkg"
  },
  "write_masked": {
    signature: "target function void write_masked(R mask, R val)",
    documentation: "Writes a value to a register type R, applying a mask to update only specified bits. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "mask", documentation: "Register mask specifying bits to update (1 = update, 0 = preserve)." },
      { label: "val", documentation: "Register value to write, masked by mask." }
    ],
    package: "addr_reg_pkg"
  },
  "write_val_masked": {
    signature: "target function void write_val_masked(bit[SZ] mask, bit[SZ] val)",
    documentation: "Writes a bit vector of size SZ to a register, applying a mask to update only specified bits. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "mask", documentation: "Bit mask of size SZ (1 = update, 0 = preserve)." },
      { label: "val", documentation: "Bit vector of size SZ to write, masked by mask." }
    ],
    package: "addr_reg_pkg"
  },
  "write_field": {
    signature: "target function void write_field(string name, bit[SZ] val)",
    documentation: "Writes a bit vector of size SZ to a named field within a register. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "name", documentation: "Name of the field within the register." },
      { label: "val", documentation: "Bit vector of size SZ to write to the field." }
    ],
    package: "addr_reg_pkg"
  },
  "write_fields": {
    signature: "target function void write_fields(list<string> names, list<bit[SZ]> vals)",
    documentation: "Writes multiple bit vectors of size SZ to named fields within a register. Available only on the target platform (Annex C.3).",
    parameters: [
      { label: "names", documentation: "List of field names within the register." },
      { label: "vals", documentation: "List of bit vectors of size SZ to write to each field." }
    ],
    package: "addr_reg_pkg"
  },
  "get_offset_of_instance": {
    signature: "pure function bit[64] get_offset_of_instance(string name)",
    documentation: "Returns the 64-bit offset of a named instance within a register group, relative to the group’s base address (Annex C.3).",
    parameters: [
      { label: "name", documentation: "Name of the instance within the register group." }
    ],
    package: "addr_reg_pkg"
  },
  "get_offset_of_instance_array": {
    signature: "pure function bit[64] get_offset_of_instance_array(string name, int index)",
    documentation: "Returns the 64-bit offset of an instance at a specific index within a named array in a register group (Annex C.3).",
    parameters: [
      { label: "name", documentation: "Name of the instance array within the register group." },
      { label: "index", documentation: "Index of the instance within the array." }
    ],
    package: "addr_reg_pkg"
  },
  "get_offset_of_path": {
    signature: "pure function bit[64] get_offset_of_path(list<node_s> path)",
    documentation: "Returns the 64-bit offset along a hierarchical path of nodes within a register group (Annex C.3).",
    parameters: [
      { label: "path", documentation: "List of node_s structs defining the hierarchical path." }
    ],
    package: "addr_reg_pkg"
  },
  "set_handle": {
    signature: "solve function void set_handle(addr_handle_t addr)",
    documentation: "Associates an address handle with a register group, setting its base address for subsequent operations. Available only on the solve platform (Annex C.3).",
    parameters: [
      { label: "addr", documentation: "Address handle to set for the register group." }
    ],
    package: "addr_reg_pkg"
  }
};