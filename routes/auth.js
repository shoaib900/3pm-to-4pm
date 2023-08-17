var express = require("express");
var router = express.Router();
var au = require("../controller/authController")

router.post("/form", au.Create )
router.get("/form", au.Find )
router.put("/form/:id", au.Update )
router.delete("/form/:id", au.Delete )

module.exports = router;