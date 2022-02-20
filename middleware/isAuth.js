const User = require("../model/User");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    // test token
    const token = await req.headers["authorization"];

    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "You are not authorized !!!" }] });
    }

    // decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
   
    // fetch user with this id
    const userToFind = await User.findOne({ _id: decoded.id });
    if (!userToFind) {
      return res
        .status(401)
        .send({ errors: [{ msg: "You are not authorized !!" }] });
    }
    req.user = userToFind;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "You are not authorized !" }] });
  }
};

module.exports = isAuth;
