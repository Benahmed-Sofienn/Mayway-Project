
const Comment = require("../model/Comment");

const addComment = async (req, res) => {
    try {
      const newComment = req.body;
      // test Comment required
      if (
        !newComment.comment 
      ) {
        return res
          .status(400)
          .send({ msg: "Comment is required !!" });
      }
      
      // create new document
  
      const commentToAdd = new Comment(newComment);
      await commentToAdd.save();
  
      res.status(200).send({ msg: "Comment added succesfuly", commentToAdd });
    } catch (error) {
      res.status(400).send({ msg: "Can not add new comment", error });
    }
  };
  
  const getAllComments = async (req, res) => {
    try {
      const commentsList = await Comment.find();
      res
        .status(200)
        .send({ msg: "this is the list of comments", commentsList });
    } catch (error) {
      res.status(400).send({ msg: "Can not get all comments", error });
    }
  };
  const getOneComment = async (req, res) => {
    try {
      const { _id } = req.params;
      const commentToFind = await Comment.findOne({ _id });
      res.status(200).send({ msg: "Comment found ", commentToFind });
    } catch (error) {
      res.status(400).send({ msg: "Can not get this comment", error });
    }
  };
  const deleteOneComment = async (req, res) => {
    try {
      const { _id } = req.params;
      await Comment.deleteOne({ _id });
      res.status(200).send({ msg: "Comment deleted !!" });
    } catch (error) {
      res.status(400).send({ msg: "Can not delete this comment", error });
    }
  };
  const updateOneComment = async (req, res) => {
    try {
      const { _id } = req.params;
      const newComment = req.body;
      let result = await Comment.updateOne(
        { _id },
        { $set: { ...newComment } }
      );
      if (result.nModified === 0) {
        return res.status(400).send({ msg: "Comment already updated !!!" });
      }
      res.status(200).send({ msg: "Comment updated succesfuly !!" });
    } catch (error) {
      res.status(400).send({ msg: "Can not update this comment", error });
    }
  };
  
  module.exports = controllers = {
    addComment,
    getAllComments,
    getOneComment,
    deleteOneComment,
    updateOneComment,
  };
  
  