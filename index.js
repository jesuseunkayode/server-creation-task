const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    let filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, "utf8", (err, content) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(content);
    });
  }
  if (request.url === "/about.html") {
    let filePath = path.join(__dirname, "public", "about.html");
    fs.readFile(filePath, "utf8", (err, content) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(content);
    });
  }
  if (request.url === "/contact.html") {
    let filePath = path.join(__dirname, "public", "contact.html");
    fs.readFile(filePath, "utf8", (err, content) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(content);
    });
  }
});

const port = 5000;
server.listen(port, () => {
  console.log("server is working");
});
