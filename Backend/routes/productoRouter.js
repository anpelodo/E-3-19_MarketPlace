const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductController");

router.post("/add", productController.add);
router.get("/list", productController.getAll);
router.get("/:id", productController.getById);
router.delete("/:id", productController.del);
router.put("/:id", productController.update);

module.exports = router;
