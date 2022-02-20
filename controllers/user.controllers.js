const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Bann = require("../model/Bann");

// register
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, imgLink } = req.body;

    // check email
    const userToFind = await User.findOne({ email });
    if (userToFind) {
      return res.status(400).send({
        errors: [{ msg: "There is already an account with this email !!" }],
      });
    }
    const newUser = new User({ name, email, password, phone, imgLink });

    // hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    newUser.password = hashedPassword;

    await newUser.save();

    // token
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
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
      expiresIn: "24h",
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
//ddadada

exports.getAllUsers = async (req, res) => {
  try {
    const usersList = await User.find();
    res.status(200).send({ msg: "this is the list of clients", usersList });
  } catch (error) {
    res.status(400).send({ msg: "Can not get all clients", error });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const userToFind = await User.findOne({ _id });
    res.status(200).send({ msg: "client found ", userToFind });
  } catch (error) {
    res.status(400).send({ msg: "Can not get this client", error });
  }
};

exports.deleteOneUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await User.deleteOne({ _id });
    res.status(200).send({ msg: "Client deleted !!" });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this Client", error });
  }
};

exports.updateOneUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const newUser = req.body;
    let result = await User.updateOne({ _id }, { $set: { ...newUser } });
    if (result.nModified === 0) {
      return res.status(400).send({ msg: "Client already updated !!!" });
    }
    res.status(200).send({ msg: "Client updated succesfuly !!" });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this client", error });
  }
};

exports.bannUser = async (req, res) => {
  try {
    const newClient = req.body;

    // test email is unique
    const clientToFind = await Bann.findOne({
      email: newClient.email,
    });
    if (clientToFind) {
      return res.status(400).send({ msg: "Client already banned !! " });
    }
    // create new document

    const clientToBann = new Bann(newClient);
    await clientToBann.save();

    res.status(200).send({ msg: "Client banned succesfuly", clientToBann });
  } catch (error) {
 
    res.status(400).send({ msg: "Can not bann this client", error });
  }
};

exports.unbannUser = async (req, res) => {
  try {
    const { _id } = req.params;

    await Bann.deleteOne({ _id });
    res.status(200).send({ msg: "Client unbanned !!" });
  } catch (error) {
    res.status(400).send({ msg: "Can not unbann this Client", error });
  }
};

exports.getAllBannedUsers = async (req, res) => {
  try {
    const blackList = await Bann.find();
    res
      .status(200)
      .send({ msg: "this is the list of banned clients", blackList });
  } catch (error) {
    res.status(400).send({ msg: "Can not get all banned clients", error });
  }
};
