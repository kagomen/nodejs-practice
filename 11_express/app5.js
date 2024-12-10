import express from "express";
import apiRoutes from "./api-routes/index.js";
const app = express();
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
