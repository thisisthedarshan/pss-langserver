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

// Directory containing TypeScript files
const dirPath = path.join(__dirname, "src/grammar");

// Multiline string to prepend
const header = `/*
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
`;

(async () => {
  try {
    // Get all .ts files in the directory
    const files = await fs.readdir(dirPath);

    for (const file of files) {
      if (file.endsWith(".ts")) {
        const filePath = path.join(dirPath, file);

        // Read the existing content
        const content = await fs.readFile(filePath, "utf8");

        // Prepend the header
        const newContent = header + content;

        // Write back the updated content
        await fs.writeFile(filePath, newContent, "utf8");
        console.log(`Updated: ${file}`);
      }
    }

    console.log("All TypeScript files updated with license.");
  } catch (error) {
    console.error("Error processing files:", error);
  }
})();
