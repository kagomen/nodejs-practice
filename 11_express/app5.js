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

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  if (product) {
    res.send(product);
  } else {
    res.send("not found", 404);
  }
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send("created");
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id == id);
  if (index == -1) {
    res.send("not found", 404);
  }
  products.splice(index, 1);
  // console.log(products);
  res.send("deleted");
});

app.patch("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id == id);
  if (index == -1) {
    res.send("not found", 404);
  }
  console.log(req.body);
  products[index] = { ...products[index], ...req.body };
  // console.log(products);
  res.send("updated");
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
