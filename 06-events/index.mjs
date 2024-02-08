import { EventEmitter } from "events";

const myEmitter = new EventEmitter();
const timeoutListenerFn = (sec, greeting) => {
  console.log("Timeout event " + sec + " seconds" + " " + greeting);
};

myEmitter.on("timeout", timeoutListenerFn);
setTimeout(() => {
  myEmitter.emit("timeout", 1, "Hello");
}, 1000);

setTimeout(() => {
  myEmitter.emit("timeout", 2, "World");
}, 2000);

myEmitter.once("once", () => {
  console.log("Once event");
});

// Listener function will be called only once
setTimeout(() => {
  myEmitter.emit("once");
}, 1000);

setTimeout(() => {
  myEmitter.emit("once");
}, 2000);

// Remove listener from timeout event
setTimeout(() => {
  myEmitter.off("timeout", timeoutListenerFn);
}, 3000);

setTimeout(() => {
  myEmitter.emit("timeout", 4, "Wont work");
}, 4000);