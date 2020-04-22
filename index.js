let http = require("http");

const PORT = 80;
const RESPONSE = `\
<p>
  本地址包含be/je的mc服<br/>
  <input value="mc.colintree.cn"></input>
</p>
<p>
  并有je服网页地图
  <ol>
  <li>
    <a href="http://mc.colintree.cn:8123" target="_blank">生存分服</a>
    <small>（<a href="http://bot.colintree.cn:8123" target="_blank">海外分流</a>）</small>
  </li>
  <li>
    <a href="http://mc.colintree.cn:8124" target="_blank">创造分服</a>
    <small>（<a href="http://bot.colintree.cn:8124" target="_blank">海外分流</a>）</small>
  </li>
  </ol>
</p>`;

start();

function start() {
  let server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    response.end(RESPONSE);
  });
  console.log("listening port at: " + PORT);
  server.listen(PORT);
}