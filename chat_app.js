const EventEmitter = require("events");
const emitter = new EventEmitter();

function sendMessage(userName, message, emitter) {
  emitter.emit("message", userName, message);
}

emitter.on("message", (userName, message) => {
  console.log(`${userName}: ${message}`);
});

sendMessage("Olha", "Hello, Nadiia!", emitter);
sendMessage("Nadiia", "Hello, mom!", emitter);
