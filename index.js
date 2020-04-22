let http = require("http");

const PORT = 80;

start();

function start() {
  let server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.write("Welcome to bot.colintree.cn");
    response.write("<ol>");
    response.write("<li><a href=\"http://mc.colintree.cn:8123\">生存服网页地图</a></li>");
    response.write("<li><a href=\"http://mc.colintree.cn:8124\">创造服网页地图</a></li>");
    response.write("</ol>");
    response.end();
  });
  console.log("listening port at: " + PORT);
  server.listen(PORT);
}