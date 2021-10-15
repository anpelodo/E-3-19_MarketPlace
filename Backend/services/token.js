var jwt = require("jsonwebtoken");
const User = require("../models/user");

async function checkToken(token) {
  let __id = null;
  try {
    const { id } = await jwt.decode(token);
    __id = id;
  } catch (e) {
    return false;
  }
  console.log(__id);
  const user = await User.findById(__id);
  if (user) {
    const token = jwt.sign(
      { id: __id, role: user.rol }, // Parametros que van asignados al token
      "secretKeyToGenerateToken", // Clave de encriptacion
      {
        expiresIn: "1d" // Tiempo de expiración
      }
    );
    return { token, rol: user.rol };
  } else {
    return false;
  }
}

module.exports = {
  //generar el token
  encode: async (_id, rol) => {
    console.log(rol);
    const token = jwt.sign({ id: _id }, "secretKeyToGenerateToken", {
      expiresIn: "1d"
    });
    return token;
  },
  //permite decodificar el token
  decode: async token => {
    try {
      const { id } = await jwt.verify(token, "secretKeyToGenerateToken");
      const user = await User.findById({ id });
      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (e) {
      const newToken = await checkToken(token);
      return newToken;
    }
  }
};
