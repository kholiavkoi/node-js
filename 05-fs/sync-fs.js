const fs = require("fs");

// avoid using sync versions! They block event loop!
try {
  fs.writeFileSync("first.txt", "First file text");
  console.log('File "first.txt" was written');
  fs.appendFileSync("first.txt", "\nSecond file text");
  console.log("File first.txt was appended");
  fs.renameSync("./first.txt", "./second.txt");
  console.log("File first.txt was renamed to second.txt");
} catch (error) {
  console.log(error);
}
