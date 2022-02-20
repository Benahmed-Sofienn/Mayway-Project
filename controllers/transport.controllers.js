
 const Transport = require("../model/Transport");


const addTransport = async (req, res) => {
  try {
    const newTransport = req.body;
    // test type, number, stops and times required
    if (
      !newTransport.type ||
      !newTransport.number ||
      !newTransport.stops ||
      !newTransport.times
    ) {
      return res
        .status(400)
        .send({ msg: "type, number, stops and times are required !!" });
    }
    // test number is unique
    const transportToFind = await Transport.findOne({
      number: newTransport.number,
    });
    if (transportToFind) {
      return res.status(400).send({ msg: "Transport already exist !! " });
    }
    // create new document

    const transportToAdd = new Transport(newTransport);
    await transportToAdd.save();

    res.status(200).send({ msg: "Transport added succesfuly", transportToAdd });
  } catch (error) {
    res.status(400).send({ msg: "Can not add new transport", error });
  }
};

const getAllTransports = async (req, res) => {
  try {
    
    const transportsList = await Transport.find();
    res
      .status(200)
      .send({ msg: "this is the list of transports", transportsList });
  } catch (error) {
    res.status(400).send({ msg: "Can not get all transports", error });
  }
};
const getOneTransport = async (req, res) => {
  try {
    const { _id } = req.params;
    const transportToFind = await Transport.findOne({ _id });
    res.status(200).send({ msg: "transport found ", transportToFind });
  } catch (error) {
    res.status(400).send({ msg: "Can not get this transport", error });
  }
};
const deleteOneTransport = async (req, res) => {
  try {
    const { _id } = req.params;
    await Transport.deleteOne({ _id });
    res.status(200).send({ msg: "Transport deleted !!" });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this Transport", error });
  }
};
const updateOneTransport = async (req, res) => {
  try {
    const { _id } = req.params;
    const newTransport = req.body;
    let result = await Transport.updateOne(
      { _id },
      { $set: { ...newTransport } }
    );
    if (result.nModified === 0) {
      return res.status(400).send({ msg: "Transport already updated !!!" });
    }
    res.status(200).send({ msg: "Transport updated succesfuly !!" });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this Transport", error });
  }
};





module.exports = controllers = {
  addTransport,
  getAllTransports,
  getOneTransport,
  deleteOneTransport,
  updateOneTransport,
};

