const {Formation }= require('../models'); 

// Get all formation 
const getAllFormations = async (req, res) => {
  try {
    console.log("hello");

    const formations = await Formation.findAll();
    console.log("hi");
    res.json(formations);
  } catch (error) {
    console.error('Error fetching formations from the database: ' + error.stack);
    res.status(500).json({ error: 'Failed to fetch formations' });
  }
};

// Create a new formation
const postFormation = async (req, res) => {
  try {
    const newFormation = await Formation.create(req.body);
    res.status(201).json(newFormation); // Return the newly created formation
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Error creating formation'});
  }
};

// Get a formation by ID
const getOneFormation = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
        return res.status(404).json({ message: "Formation introuvable" });
    }
    res.json(formation);
} catch (error) {
  console.error('Error fetching formations from the database: ' + error.stack);
    res.status(500).json({ message: error.message });
}

};
// Update a formation by ID
const updateFormation = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
      return res.status(404).json({ message: "Formation introuvable" });
    }
    await formation.update(req.body);
    res.json(formation);
  } catch (error) {
    console.error('Error updating formation: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

// Delete a formation by ID
const deleteFormation = async (req, res) => {
  try {
    const formation = await Formation.findByPk(req.params.id);
    if (!formation) {
      return res.status(404).json({ message: "Formation introuvable" });
    }
    await formation.destroy();
    res.sendStatus(204); // No content, successful deletion
  } catch (error) {
    console.error('Error deleting formation: ' + error.stack);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFormations,
  postFormation,
  getOneFormation,
  updateFormation,
  deleteFormation
};