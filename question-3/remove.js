/*----------------------------------------------------------------------------------------------------------------------
  QUESTION 3 – PART 2
----------------------------------------------------------------------------------------------------------------------*/

const fs = require('fs');
const path = require('path');

// Process current working directory to build directory path
const logsDirectory = path.join(process.cwd(), 'Logs')

// Remove all the files from the Logs directory, if exists
if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);

    // Output the file names to delete
    files.forEach((file) => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDirectory, file));
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDirectory);

} else {
    console.log('Logs directory does not exist.');
}
