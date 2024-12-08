const CategoryNameController = require("../controllers/CategoryNameController");
const CategoryNameRoute = require("express").Router();

CategoryNameRoute.post("/add", CategoryNameController.add);
CategoryNameRoute.get("/all", CategoryNameController.getAll);
module.exports = CategoryNameRoute;
