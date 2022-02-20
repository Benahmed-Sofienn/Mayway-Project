const isAdmin = async (req, res, next) => {
  try {
    const user = req.user;



    if (user.name !== "admin") {
      return res
        .status(401)
        .send({ errors: [{ msg: "You are not authorized !" }] });
    }
 
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "You are not authorized !!!!!" }] });
  }
};

module.exports = isAdmin;
