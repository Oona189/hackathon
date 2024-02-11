const express = require("express");
const formationController = require('../controllers/formationController');

const router = express.Router();

router.get('/', formationController.getAllFormations);

router.post('/', formationController.postFormation);


module.exports = router;