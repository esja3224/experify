const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Experiment = require('./models/experiment');

router.get("/experiments", async (req, res) => {
	const experiments = await Experiment.find();
	res.send(experiments);
});

router.post("/experiments", jsonParser, async (req, res) => {
    const experiment = new Experiment({
        independent: req.body.independent,
        dependent: req.body.dependent,
        description: req.body.description
    });
    await experiment.save();
    res.send(experiment);
});

module.exports = router;