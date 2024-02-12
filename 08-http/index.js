const http = require("http");
const { getHTML, getHome, getComments, getText, addComment, handleNotFound } = require("./handlers");
const comments = require('./data')

const PORT = 5001;



const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    return getHome(req, res);
  }

  if (req.method === "GET" && req.url === "/html") {
    return getHTML(req, res);
  }

  if (req.method === "GET" && req.url === "/text") {
    return getText(req, res);
  }

  if (req.method === "GET" && req.url === "/comments") {
    return getComments(req, res);
  }

  if (req.method === "POST" && req.url === "/comments") {
    return addComment(req, res);
  }

  handleNotFound(req, res);
});

server.listen(PORT, () => {
  console.log(`Server was launched on port ${PORT}`);
});