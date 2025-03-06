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
const fs = require("fs-extra");
const path = require("path");

const filePath = path.join(__dirname, "dist/pss-langserver.js");
const shebang = "#!/usr/bin/env node\n";

(async () => {
  try {
    // Read existing file content
    const content = await fs.readFile(filePath, "utf8");

    // Check if shebang already exists
    if (!content.startsWith(shebang)) {
      // Prepend shebang and write back
      await fs.writeFile(filePath, shebang + content, "utf8");
      console.log("Shebang added successfully.");
    } else {
      console.log("Shebang already exists.");
    }
  } catch (error) {
    console.error("Error modifying file:", error);
  }
})();
