const express = require("express");
const router = express.Router();

const productoRouter = require("./productoRouter");

router.use("/product", productoRouter);

module.exports = router;
