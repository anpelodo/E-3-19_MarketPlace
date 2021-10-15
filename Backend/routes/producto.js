const express = require("express");
const router = express.Router();

const Producto = require("../models/producto");

//Agregar un producto

router.post("/nuevo-producto", async (req, res) => {
  const body = req.body;

  try {
    const productoDB = await Producto.create(body);
    res.status(201).json(productoDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

//obtener documento por id
router.get("/producto/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const productoDB = await Producto.findOne({ _id });

    return productoDB ? res.json(productoDB) : res.status(204).json({});
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

//obtener todo los documentos
router.get("/producto", async (req, res) => {
  try {
    const productoDB = await Producto.find();
    res.json(productoDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

//delete

router.delete("/producto/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const productoDB = await Producto.findByIdAndDelete({ _id });

    if (!productoDB) {
      return res.status(400).json({
        mensaje: "No se encontro el id indicado"
      });
    } else {
      return res.status(200).json({
        id: _id,
        status: true
      });
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

//update

router.put("/producto/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const productoDB = await Producto.findByIdAndUpdate(_id, body, {
      new: true
    });
    res.json(productoDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

//Exportamos la configuracion de express app
module.exports = router;
