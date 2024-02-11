const express = require('express');
const formateurController = require('../controllers/formateurController');

const router = express.Router();

router.get('/', formateurController.getAllFormateurs); 
router.post('/', formateurController.postFormateur); 
router.get('/:id', formateurController.getOneFormateur); 
router.put('/:id', formateurController.updateFormateur); 
router.delete('/:id', formateurController.deleteFormateur);

module.exports = router;
