const express = require('express');
const partenaireController = require('../controllers/partenaireController');

const router = express.Router();

// Routes for handling partenaires
router.get('/', partenaireController.getAllPartenaires); 
router.post('/', partenaireController.postPartenaire); 
router.get('/:id', partenaireController.getOnePartenaire); 
router.put('/:id', partenaireController.updatePartenaire);
router.delete('/:id', partenaireController.deletePartenaire);

module.exports = router;
