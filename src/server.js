const http = require("http");
const url = require("url");
const router = require("./routes/router");
const morgan = require("morgan");

const logger = morgan("combined");

const startServer = port => {
  const server = http.createServer((request, response) => {
    const parsedURL = url.parse(request.url);
    const funcRout = router[parsedURL.pathname];

    logger(request, response, () => {
      funcRout(request, response);
    });
  });
  server.listen(port, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Server is running on port ${port}`);
  });
};

module.exports = startServer;
