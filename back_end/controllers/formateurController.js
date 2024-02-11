const { Formateur } = require('../models');

const getAllFormateurs = async (req, res) => {
  try {
    const formateurs = await Formateur.findAll();
    res.json(formateurs);
  } catch (error) {
    console.error('Error fetching formateurs from the database: ' + error.stack);
    res.status(500).json({ error: 'Failed to fetch formateurs' });
  }
};

const postFormateur = async (req, res) => {
  try {
    const newFormateur = await Formateur.create(req.body);
    res.status(201).json(newFormateur); 
  } catch (err) {
    console.error('Error creating formateur: ', err);
    res.status(500).json({ error: 'Error creating formateur', message: err.message });
  }
};

const getOneFormateur = async (req, res) => {
  try {
    const formateur = await Formateur.findByPk(req.params.id);
    if (!formateur) {
      return res.status(404).json({ message: "Formateur introuvable" });
    }
    res.json(formateur);
  } catch (error) {
    console.error('Error fetching formateur from the database: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

const updateFormateur = async (req, res) => {
  try {
    const formateur = await Formateur.findByPk(req.params.id);
    if (!formateur) {
      return res.status(404).json({ message: "Formateur introuvable" });
    }
    await formateur.update(req.body);
    res.json(formateur);
  } catch (error) {
    console.error('Error updating formateur: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

const deleteFormateur = async (req, res) => {
  try {
    const formateur = await Formateur.findByPk(req.params.id);
    if (!formateur) {
      return res.status(404).json({ message: "Formateur introuvable" });
    }
    await formateur.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting formateur: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFormateurs,
  postFormateur,
  getOneFormateur,
  updateFormateur,
  deleteFormateur
};