// require express
const { response } = require("express");
const express = require("express");

//require Router
const router = express.Router();

//require model
const Comment = require("../model/Comment");

//require controllers
const controllers = require("../controllers/comment.controllers");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");

/**
 * @desc : add new comment
 * @method: POST
 * @path : 'http://localhost:6000/api/comments/'
 * @data : req.body
 */
router.post("/",  controllers.addComment);

/**
 * @desc : get all comments
 * @method: GET
 * @path : 'http://localhost:6000/api/comments/'
 * @data : no
 */
router.get("/",  controllers.getAllComments);

/**
 * @desc : get one comment by id
 * @method: GET
 * @path : 'http://localhost:6000/api/comments/:id'
 * @data : req.params.id
 */
router.get("/:_id",  controllers.getOneComment);

/**
 * @desc : delete one comment
 * @method: DELETE
 * @path : 'http://localhost:6000/api/comments/:id'
 * @data : req.params.id
 */
router.delete("/:_id",  controllers.deleteOneComment);

/**
 * @desc : update comment by id
 * @method: PUT
 * @path : 'http://localhost:6000/api/comments/:id'
 * @data : req.params and req.body
 */
router.put("/:_id",  controllers.updateOneComment);

module.exports = router;
