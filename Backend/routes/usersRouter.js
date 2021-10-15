const express = require("express");
const router = express.Router();

const usersController = require("../controllers/UsersController");

router.post("/add", usersController.add);
router.put("/:id", usersController.update);
router.get("/list", usersController.list);
router.delete("/:id", usersController.del);
router.post("/login", usersController.login);

module.exports = router;
