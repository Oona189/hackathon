const {Theme }= require('../models'); 

// Get all formation 
const getAllThemes = async (req, res) => {
  try {
    console.log("hello");

    const Themes = await Theme.findAll();
    res.json(Themes);
  } catch (error) {
    console.error('Error fetching Themes from the database: ' + error.stack);
    res.status(500).json({ error: 'Failed to fetch Themes' });
  }
};

const postTheme = async (req, res) => {
    try {
      const newTheme = await Theme.create(req.body);
      res.status(201).json(newTheme); // Return the newly created theme
    } catch (err) {
      console.error('Error creating theme: ', err);
      res.status(500).json({ error: 'Error creating theme', message: err.message });
    }
  };


const getOneTheme = async (req, res) => {
    try {
      const theme = await Theme.findByPk(req.params.id);
      if (!theme) {
        return res.status(404).json({ message: "Theme introuvable" });
      }
      res.json(theme);
    } catch (error) {
      console.error('Error fetching theme from the database: ' + error.stack);
      res.status(500).json({ message: error.message });
    }
  };


  const updateTheme = async (req, res) => {
    try {
      const theme = await Theme.findByPk(req.params.id);
      if (!theme) {
        return res.status(404).json({ message: "Theme introuvable" });
      }
      await theme.update(req.body);
      res.json(theme);
    } catch (error) {
      console.error('Error updating theme: ' + error.stack);
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteTheme = async (req, res) => {
    try {
      const theme = await Theme.findByPk(req.params.id);
      if (!theme) {
        return res.status(404).json({ message: "Theme introuvable" });
      }
      await theme.destroy();
      res.sendStatus(204); // No content, successful deletion
    } catch (error) {
      console.error('Error deleting theme: ' + error.stack);
      res.status(500).json({ message: error.message });
    }
  };
  


module.exports = {
  getAllThemes,
  postTheme,
  getOneTheme,
  updateTheme,
  deleteTheme
};