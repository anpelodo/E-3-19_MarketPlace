const jwt = require("../services/token");

module.exports = {
  verifyAdmin: async (req, res, next) => {
    if (req.headers.token) {
      const token = req.headers.token;

      //Verificando el token
      const jwtResponse = await jwt.decode(token);
      if (jwtResponse.rol == "ADMIN") {
        next();
      } else {
        return res.status(401).json({
          mensaje: "No autorizado"
        });
      }
    } else {
      return res.status(404).json({
        mensaje: "No hay token"
      });
    }
  }
};
