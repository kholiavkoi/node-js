const { myName, myFavoriteNumber, myHobbies } = require("./multiple-exports");
const greetingFn = require("./single-export");
const {
  myName: name,
  myFriendsName,
  myGreatHobbies,
} = require("./export-and-import");

console.log(name, myFriendsName);

greetingFn(myName);

myHobbies.push("JavaScript");

console.log(myGreatHobbies);
