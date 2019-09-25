const mainRoute = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello User</h1>");
    res.end();
}

module.exports = mainRoute;