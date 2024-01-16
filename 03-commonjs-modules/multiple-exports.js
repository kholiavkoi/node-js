const myName = "Iaroslav";
const myHobbies = ["coding", "reading", "gaming"];
const myFavoriteNumber = 42;

console.log("String from imported module");

module.exports.myName = myName;
module.exports.myHobbies = myHobbies;
module.exports.myFavoriteNumber = myFavoriteNumber;
