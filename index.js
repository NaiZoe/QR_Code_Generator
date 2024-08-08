/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"

inquirer
  .prompt([
    {
        message: "Type your URL: ", 
        name: "URL" 
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    const writeFile =fs.createWriteStream("URL.txt", { flags: 'a' });
    function writeNewLine(data) {
      writeFile.write(data + '\n');
    }
    writeNewLine(url);
    i++;
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Any error has occured");
    } else {
      console.log("Something went wrong");
    }
  });



