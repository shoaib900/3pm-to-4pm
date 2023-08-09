var express = require("express");
var router = express.Router();
var au = require("../controller/authController")

router.post("/formPost", au.signup )
router.post("/form", au.login )


module.exports = router;