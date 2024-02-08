import EventEmitter from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();
const filePath = "first.txt";

fileEmitter.on("writeComplete", () => {
  console.log(`File ${filePath} was written`);
  fs.appendFile(filePath, "\nSecond file text", () => {
    fileEmitter.emit("appendComplete");
  });
});

fileEmitter.on("appendComplete", () => {
  console.log(`File ${filePath} was appended`);
  fs.rename(filePath, "./second.txt", () => {
    fileEmitter.emit("renameComplete");
  });
});

fileEmitter.on("renameComplete", () => {
  console.log(`File ${filePath} was renamed to "second.txt"`);
});

fs.writeFile(filePath, "First file text", () => {
  fileEmitter.emit("writeComplete");
});

