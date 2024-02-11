const express = require("express");
const formationController = require('../controllers/formationController');
const {Formation }= require('../models');

const router = express.Router();

router.get('/',formationController.getAllFormations);

router.post('/',formationController.postFormation);
router.get('/:id', formationController.getOneFormation);
router.put('/:id', formationController.updateFormation);
router.delete('/:id', formationController.deleteFormation);




module.exports = router;