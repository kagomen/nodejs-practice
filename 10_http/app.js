import * as http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end("こんにちは");
  } else if (req.url === "/request-sample") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.write(
      `<a href="/result?value1=sample1&value2=sample2">サンプルリンク</a>`
    ); // ペイロードは value1:sample1, value2:sample
    res.end(`
      <form action="/result" method="post">
        <input type="text" name="value1">
        <input type="text" name="value2">
        <input type="submit">
      </form>
      `); // ペイロードは value: <入力した値>
  } else {
    if (req.method === "GET") {
      const queryString = req.url.split("?")[1]; // req.url: '/result?value=sample1&value=sample2'
      const params = new URLSearchParams(queryString);
      // console.log(params); // { 'value1' => 'sample1', 'value2' => 'sample2' }
      // console.log(params.get("value1")); // sample1
      // console.log(params.has("value2")); // true
    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        // data: データ読み込み時に発火するイベント名
        // chunkにはPOSTメソッドの本文が入る
        // POSTメソッドはストリームの形式（分割して送信）で送られる
        body += chunk;
      });
      req.on("end", () => {
        // end: データの受け渡し終了時に発火するイベント名
        console.log(body);
        const params = new URLSearchParams(body);
        console.log(params);
      });
    }
    // }else if (req.url === "/404") {
    //   res.end("404");
    // } else {
    //   res.writeHead(302, { Location: "/404" });
    //   res.end();
    // }
  }
});

server.listen(8080);
