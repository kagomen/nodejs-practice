import express from "express";

const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/cart" method="POST">
      <input type="text" name="items[]" value="商品1">
      <input type="text" name="items[]" value="商品2">
      <input type="submit">
    </form>  
  `);
});

app.post("/cart", (req, res) => {
  const items = req.body.items;
  res.send(`
    <p>${items.join(", ")}がカートに入りました</p>  
  `);
});

app.listen(PORT, () => {
  console.log(`Hello Express! Server running at http://localhost:${PORT}`);
});
