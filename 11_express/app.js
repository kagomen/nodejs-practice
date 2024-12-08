import express from "express";

const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
// express.urlencoded() -> req.body を使えるようにする
// extended: true -> qsライブラリを使う

app.get("/", (req, res) => {
  // end()もあるが、send()を使うことを推奨
  // send()はContent-typeが自動で設定される
  res.send(`
    <a href="/result?value1=sample1&value2=sample2">サンプルリンク</a>
    <form action="/result" method="post">
      <input type="text" name="value1">
      <input type="text" name="value2[]">
      <input type="text" name="value2[]">
      <input type="submit">
    </form>
  `);
});

app.get("/result", (req, res) => {
  const params = req.query;
  console.log(params);
});

app.post("/result", (req, res) => {
  const body = req.body;
  console.log(body);
});

app.listen(PORT, () => {
  console.log(`Hello Express! Server running at http://localhost:${PORT}`);
});
