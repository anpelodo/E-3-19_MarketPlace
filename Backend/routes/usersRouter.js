const express = require("express");
const router = express.Router();

const usersController = require("../controllers/UsersController");
const auth = require("../middleware/auth");

router.post("/add", usersController.add);
router.put("/:id", usersController.update); // El propio usuario puede editar, o un administrador
router.get("/list", auth.verifyAdmin, usersController.list); // Sólo el administrador
router.delete("/:id", usersController.del); // El propio usuario puede editar, o un administrador
router.post("/login", usersController.login);

module.exports = router;
