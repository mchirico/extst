const express = require("express");
const http = require("http");
const fs = require("fs");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.get("*", function(req, res) {
  res.send("Hi works...");
  fs.appendFileSync("./log", `log: ${Date.now().toString()}\n`);
});

module.exports = {
  server: server,
  port: port
};
