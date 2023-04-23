const PageRouter  = require("express").Router();
const HomeController = require("../controller/HomeController");
const FashionController = require("../controller/FashionControllr");
const JeweleryController = require("../controller/JeweleryController");
const ElectronicController = require("../controller/ElectronicController");

PageRouter.route("/").get(HomeController.HomeUrl);
// PageRouter.route("/").get(HomeController.limitHome);
PageRouter.route("/fasion").get(FashionController.Fashion);
PageRouter.route("/jewelery").get(JeweleryController.Jewelery);
PageRouter.route("/electronics").get(ElectronicController.Electronic);


module.exports = PageRouter;