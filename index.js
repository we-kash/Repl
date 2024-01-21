// // ECMA script
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. runtime and not a language, a runtime is a program that is used to run code outside of a browser. and not a language, a language is a set of rules that are used to communicate with a computer.

// // Node.js is an event-driven, non-blocking, asynchronous I/O runtime that uses

const express = require("express");
const app = express();

const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
