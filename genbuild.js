const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const { version } = require('./package.json'); /* version from package.json */

/* Function to get the current build date in the desired format */
function getBuildDate() {
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata', /* IST timezone */
  };

  const date = new Date();
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

/* Function to modify version.ts file */
async function updateVersionFile() {
  const versionFilePath = path.join(__dirname, 'src', 'version.ts');

  try {
    /* Read the existing version.ts file */
    let versionFileContent = await fs.readFile(versionFilePath, 'utf8');

    /* Drop the last 2 lines of the file */
    const lines = versionFileContent.split('\n');
    lines.splice(-3, 3); // Remove last 2 lines

    /* Add version from package.json */
    const versionFromPackage = `const ver = '${version}'`; // Add version from package.json

    /* Add build date after the version */
    const buildDate = `const build_info = '${getBuildDate()}';`; // Add build date

    /* Add Node.js version after the build date */
    const nodeVersion = `const node_ver = '${process.version}';`; // Add Node.js version

    /* Create the new content */
    const newContent = [...lines, versionFromPackage, buildDate, nodeVersion].join('\n');

    /* Write the new content back to the version.ts file */
    await fs.writeFile(versionFilePath, newContent, 'utf8');

    console.log('version.ts has been successfully updated!');
  } catch (err) {
    console.error('Error reading or writing the version.ts file:', err);
  }
}

// Run the function
updateVersionFile();
