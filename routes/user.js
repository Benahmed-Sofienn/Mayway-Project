// require express
const express = require("express");
const {
  register,
  login,
  current,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  
} = require("../controllers/user.controllers"); //,transports

//require middlewares
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
const {
  registerValidator,
  validations,
  loginValidator,
} = require("../middleware/userValidator");

//require Router
const router = express.Router();

/**
 * @desc : register
 * @method: POST
 * @path: /register
 * @data: req.body
 */
router.post("/register", registerValidator(), validations, register);

/**
 * @desc : login
 * @method: POST
 * @path: /login
 * @data: req.body
 */
router.post("/login", loginValidator(), validations, login);

/**
 * @desc : current user
 * @method: GET
 * @path: /current
 * @data: no
 */
router.get("/current", isAuth, current);

//dadad

/**
 * @desc : get all Users
 * @method: GET
 * @path : 'http://localhost:6000/api/users/'
 * @data : no
 */
router.get("/",  getAllUsers);



/**
 * @desc : get one client by id
 * @method: GET
 * @path : 'http://localhost:6000/api/users/:id'
 * @data : req.params.id
 */
router.get("/:_id", getOneUser);

/**
 * @desc : delete one client
 * @method: DELETE
 * @path : 'http://localhost:6000/api/users/:id'
 * @data : req.params.id
 */
router.delete("/:_id",  deleteOneUser);

/**
 * @desc : update client by id
 * @method: PUT
 * @path : 'http://localhost:6000/api/users/:id'
 * @data : req.params and req.body
 */
router.put("/:_id", updateOneUser);




module.exports = router;
