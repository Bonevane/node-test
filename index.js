const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") filePath = "./index.html";
  else if (filePath === "./about") filePath = "./about.html";
  else if (filePath === "./contact-me") filePath = "./contact-me.html";
  else filePath = "./404.html";

  fs.readFile(path.join(__dirname, filePath), (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
