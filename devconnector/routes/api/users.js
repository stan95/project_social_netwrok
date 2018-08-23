const express = require("express");
const router = express.Router();

//200 status means everything is ok.
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//Export the router in order for the server.js file to pick it up
module.exports = router;
