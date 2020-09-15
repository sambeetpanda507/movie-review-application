const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
router.get("/", userController.getHome);
router.post("/search", userController.postSearch);
router.get("/details/:movieId", userController.getDetails);
router.get("/popular", userController.getPopular);
router.get("/upcoming", userController.getUpcoming);
module.exports = router;
