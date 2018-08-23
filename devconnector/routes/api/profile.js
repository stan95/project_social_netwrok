const express = require("express");
const router = express.Router();

//200 status means everything is ok.
// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

//Export the router in order for the server.js file to pick it up
module.exports = router;
