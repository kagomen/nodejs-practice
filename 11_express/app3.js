import express from "express";

const PORT = 8080;
const app = express();

app.use(express.json()); // jsonをサーバーで受け取る時はこのミドルウェアを使う

app.get("/json", (req, res) => {
  res.send({ message: "hello", num: 100, array: [1, 2, 3] });
  // res.send()でオブジェクトを渡すとJSON.stringify() で json形式になったデータが返却される
  // res.json() は必ずjson形式で返却する
});

app.get("/", (req, res) => {
  res.send(`
    <form action="/result" method="POST">
      <input type="text" name="title">
      <input type="text" name="desc">
      <input type="submit">
    </form>
    <script>
      const form = document.querySelector("form");
      form.onsubmit = (e) => {
        e.preventDefault();
        const title = form[0].value;
        const desc = form[1].value;

        fetch("/result", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, desc })
        })
          .then(res => res.json())
          .then(data => console.log(data));
      }
    </script>
  `);
});

app.post("/result", (req, res) => {
  const body = req.body; // もしミドルウェアの express.json() を使わなければ、body は undefined になる
  res.send({ msg: "success", body });
});

app.listen(PORT, () => {
  console.log(`Hello Express! Server running at http://localhost:${PORT}`);
});
