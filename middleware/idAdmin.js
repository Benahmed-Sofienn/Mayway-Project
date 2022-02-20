const isAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.name !== Admin) {
      return res
        .status(401)
        .send({ errors: [{ msg: "You are not authorized !!" }] });
    }
     //req.res ???
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "You are not authorized !!" }] });
  }
};

module.exports = isAdmin;
