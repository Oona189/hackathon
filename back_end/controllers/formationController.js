const {Formation }= require('../models'); // Check the file name and casing
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


const postFormation = async (req, res) => {
  try {
    const newFormation = await Formation.create(req.body);
    res.status(201).json(newFormation); // Return the newly created formation
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Error creating formation'});
  }
};

module.exports = {
  getAllFormations,postFormation
};
