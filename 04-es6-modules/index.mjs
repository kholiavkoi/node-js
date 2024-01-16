import { season, temperature } from "./named-exports.mjs";
import { isRaining, humidity } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import DEFAULT_SERVER, {
  USERNAME as MY_NAME,
  PASSWORD,
} from "./mixed-exports.mjs";

console.log(season, temperature);
console.log(isRaining, humidity);

getDataFromServer("https://jsonplaceholder.typicode.com/posts")
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

console.log(DEFAULT_SERVER);
console.log(MY_NAME, PASSWORD);
