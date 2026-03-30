const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./files/";
  if (req.url == "/" || req.url == "/home") {
    path += "index.html";
  } else if (req.url == "/join") {
    path += "join.html";
  } else if (req.url == "/about") {
    path += "about.html";
  } else {
    path += "Notfound.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err.message);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(PORT, () => {
  console.log("Server is Listening..");
});
