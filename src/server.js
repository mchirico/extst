const express = require("express");
const http = require("http");
const fs = require("fs");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.get("*", function(req, res) {
  res.send("Hi works...");
  const date = new Date()
  const msg = `log: ${date}\n`
  
  fs.appendFileSync("./log", msg)
  console.log(msg)
});

module.exports = {
  server: server,
  port: port
};
