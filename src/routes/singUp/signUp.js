const fs = require("fs");
const path = require("path");

const usersDirPath = path.join(__dirname, "../../db/users");

const singUp = (req, res) => {
  let body = [];
  let reqData = [];

  req
    .on("error", err => {
      console.error(err);
    })
    .on("data", chunk => {
      body.push(chunk);
    })
    .on("end", () => {
      const bufferStirng = Buffer.concat(body).toString();
      const bodyObject = JSON.parse(bufferStirng);
      reqData = bodyObject;

      const newUserPath = path.join(usersDirPath, reqData.username);
      fs.writeFile(`${newUserPath}.json`, JSON.stringify(reqData), err => {
        if (err) {
          console.error(err);
        }
      });

      const response = JSON.stringify({
        status: "success",
        user: reqData
      });
      res.writeHead(200, {
        "Content-Type": "applictaion/json"
      });
      res.end(response);
    });
};

module.exports = singUp;
