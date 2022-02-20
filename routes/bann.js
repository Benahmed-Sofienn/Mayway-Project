
// require express
const express = require("express");
const {
  bannUser,
  unbannUser,
  getAllBannedUsers,
} = require("../controllers/user.controllers"); 


//require Router
const router = express.Router();




/**
 * @desc : bann a client
 * @method: POST
 * @path : 'http://localhost:6000/api/bann/'
 * @data : req.body
 */
 router.post("/",   bannUser);  

 /**
  * @desc : unbann a client
  * @method: DELETE
  * @path : 'http://localhost:6000/api/bann/:id'
  * @data : req.params.id
  */
 router.delete("/:_id",  unbannUser);
 
 /**
  * @desc : get all banned Users
  * @method: GET
  * @path : 'http://localhost:6000/api/bann/'
  * @data : no
  */
  router.get("/",  getAllBannedUsers);

  module.exports = router;