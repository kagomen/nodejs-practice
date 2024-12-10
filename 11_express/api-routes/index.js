import express from "express";
const router = express.Router();
import productRoutes from "./products.js";
import testRoutes from "./tests.js";

router.use("/products", productRoutes);
router.use("/test", testRoutes);

export default router;
