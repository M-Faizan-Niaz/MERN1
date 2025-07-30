const express = require("express");
const router = express.Router();
const { bookFreeTrial } = require("../controllers/freeTrialController");

router.post("/", bookFreeTrial);

module.exports = router;
