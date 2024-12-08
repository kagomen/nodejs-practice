import express from "express";
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "商品1", price: 100 },
  { id: 2, name: "商品2", price: 200 },
  { id: 3, name: "商品3", price: 300 },
];

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/create-product", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  // console.log(products);
  res.send("created");
});

app.post("/delete-product", (req, res) => {
  const id = req.body.id;
  const index = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
  // console.log(products);
  res.send("deleted");
});

app.post("/update-product", (req, res) => {
  const id = req.body.id;
  const index = products.findIndex((product) => product.id === id);
  products[index] = req.body;
  // console.log(products);
  res.send("updated");
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
