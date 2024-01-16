const fs = require("fs/promises");

fs.writeFile("first.txt", "First file text")
  .then(() => {
    console.log('File "first.txt" was written');
  })
  .then(() => {
    fs.appendFile("first.txt", "\nSecond file text");
  })
  .then(() => {
    console.log("File first.txt was appended");
  })
  .then(() => {
    fs.rename("./first.txt", "./second.txt");
  })
  .then(() => {
    console.log("File first.txt was renamed to second.txt");
  })
  .catch((err) => {
    console.log("OOppps", err);
    console.error("Additional error handling in .catch block.");
  });
