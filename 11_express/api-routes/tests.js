import express from "express";
const router = express.Router();

router.use("/", (req, res, next) => {
  if (true) {
    console.log("middleware1");
    return next("エラー発生");
    // next()に引数を渡すとエラーとして処理され、
    // middleware2やrouter handler1, 2は実行されない
  }
  // returnせずnext("エラー発生")のみ実行すると、middleware1-2も実行される
  console.log("middleware1-2");
});
router.use("/", (req, res, next) => {
  console.log("middleware2");
  next();
});

router.get("/", (req, res, next) => {
  console.log("route handler1");
  next();
});
router.get("/", (req, res, next) => {
  console.log("route handler2");
  res.send("hello world"); // res.send()は一度しか送信できない
});

router.use((error, req, res, next) => {
  res.json({ error }); // next()の引数の"エラー発生"が送信される
});

export default router;
