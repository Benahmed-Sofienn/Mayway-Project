// require express
const { response } = require("express");
const express = require("express");

//require Router
const router = express.Router();

//require model
const Transport = require("../model/Transport");

//require controllers
const controllers = require("../controllers/transport.controllers");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");

/**
 * @desc : add new transport
 * @method: POST
 * @path : 'http://localhost:6000/api/transports/'
 * @data : req.body
 */
router.post("/",   controllers.addTransport);

/**
 * @desc : get all transports
 * @method: GET
 * @path : 'http://localhost:6000/api/transports/'
 * @data : no
 */
router.get("/",  controllers.getAllTransports);

/**
 * @desc : get one transport by id
 * @method: GET
 * @path : 'http://localhost:6000/api/transports/:id'
 * @data : req.params.id
 */
router.get("/:_id",  controllers.getOneTransport);

/**
 * @desc : delete one transport
 * @method: DELETE
 * @path : 'http://localhost:6000/api/transports/:id'
 * @data : req.params.id
 */
router.delete("/:_id",   controllers.deleteOneTransport);

/**
 * @desc : update transport by id
 * @method: PUT
 * @path : 'http://localhost:6000/api/transports/:id'
 * @data : req.params and req.body
 */
router.put("/:_id",   controllers.updateOneTransport);

module.exports = router;
