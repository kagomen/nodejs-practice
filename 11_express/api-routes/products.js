import express from "express";
const router = express.Router();

const products = [
  { id: 1, name: "商品1", price: 100 },
  { id: 2, name: "商品2", price: 200 },
  { id: 3, name: "商品3", price: 300 },
];

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  if (product) {
    res.send(product);
  } else {
    res.send("not found", 404);
  }
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send("created");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id == id);
  if (index == -1) {
    res.send("not found", 404);
  }
  products.splice(index, 1);
  // console.log(products);
  res.send("deleted");
});

router.patch("/:id", (req, res) => {
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

export default router;
