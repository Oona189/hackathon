const { Partenaire } = require('../models');

const getAllPartenaires = async (req, res) => {
  try {
    const partenaires = await Partenaire.findAll();
    res.json(partenaires);
  } catch (error) {
    console.error('Error fetching partenaires from the database: ' + error.stack);
    res.status(500).json({ error: 'Failed to fetch partenaires' });
  }
};

const postPartenaire = async (req, res) => {
  try {
    const newPartenaire = await Partenaire.create(req.body);
    res.status(201).json(newPartenaire); 
  } catch (err) {
    console.error('Error creating partenaire: ', err);
    res.status(500).json({ error: 'Error creating partenaire', message: err.message });
  }
};

const getOnePartenaire = async (req, res) => {
  try {
    const partenaire = await Partenaire.findByPk(req.params.id);
    if (!partenaire) {
      return res.status(404).json({ message: "Partenaire introuvable" });
    }
    res.json(partenaire);
  } catch (error) {
    console.error('Error fetching partenaire from the database: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

const updatePartenaire = async (req, res) => {
  try {
    const partenaire = await Partenaire.findByPk(req.params.id);
    if (!partenaire) {
      return res.status(404).json({ message: "Partenaire introuvable" });
    }
    await partenaire.update(req.body);
    res.json(partenaire);
  } catch (error) {
    console.error('Error updating partenaire: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

const deletePartenaire = async (req, res) => {
  try {
    const partenaire = await Partenaire.findByPk(req.params.id);
    if (!partenaire) {
      return res.status(404).json({ message: "Partenaire introuvable" });
    }
    await partenaire.destroy();
    res.sendStatus(204); 
  } catch (error) {
    console.error('Error deleting partenaire: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPartenaires,
  postPartenaire,
  getOnePartenaire,
  updatePartenaire,
  deletePartenaire
};
