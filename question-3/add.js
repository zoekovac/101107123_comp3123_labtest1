/*----------------------------------------------------------------------------------------------------------------------
  QUESTION 3 – PART 1
----------------------------------------------------------------------------------------------------------------------*/

const fs = require('fs');
const path = require('path');

// Process current working directory to build directory path
const logsDirectory = path.join(process.cwd(), 'Logs');

// Create a Logs directory, if it does not exist
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

// Change the current process to the new Logs directory
process.chdir(logsDirectory);

// Create 10 log files and write some text into the file
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(path.join(process.cwd(), fileName), `Log file ${i}`);

    // Output the files names to console
    console.log(fileName);
}
