const CategoryNameController = require("../controllers/CategoryNameController");

const CategoryNameRoute = require("express").Router();


CategoryNameRoute.post("/add",CategoryNameController.add);
  

module.exports=CategoryNameRoute
