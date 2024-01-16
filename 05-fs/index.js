const fs = require("fs");

fs.writeFile("first.txt", "First file text", (err) => {
  if (err) console.log(err);
  else {
    console.log('File "first.txt" was written');
    fs.appendFile("first.txt", "\nSecond file text", (err) => {
      if (err) console.log(err);
      else {
        console.log("File first.txt was appended");
        fs.rename("./first.txt", "./second.txt", (err) => {
          if (err) console.log(err);
          else console.log("File first.txt was renamed to second.txt");
        });
      }
    });
  }
});
