const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // check email
    const userToFind = await User.findOne({ email });
    if (userToFind) {
      return res.status(400).send({
        errors: [{ msg: "There is already an account with this email !!" }],
      });
    }
    const newUser = new User({ name, email, password, phone });

    // hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    newUser.password = hashedPassword;

    await newUser.save();

    // token
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).send({ msg: "Register success !", user: newUser, token });
  } catch (error) {
    return res
      .status(400)
      .send({ errors: [{ msg: "Register failed !!", error }] });
  }
};

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  verif email
    const userToFind = await User.findOne({ email });
    if (!userToFind) {
      return res.status(400).send({ errors: [{ msg: "Bad credentials !!!" }] });
    }

    // verif password
    const isMatch = await bcrypt.compare(password, userToFind.password);
    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "Bad credentials !!!" }] });
    }

    // token
    const token = jwt.sign({ id: userToFind._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).send({ msg: "Login success", user: userToFind, token });
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "Login fail !!", error }] });
  }
};

// current user
exports.current = (req, res) => {
  res.send(req.user);
};

// exports.transports= async (req,res) => {

//   try {
//     const tansports = await axios.get()

//   } catch (error) {
//     return res.status(400).send({ errors: [{ msg: "Cant find transports !!", error }] });

//   }

// }
