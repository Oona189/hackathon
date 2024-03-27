const { Apprenant, Partenaire } = require("../models");
// comment added here
const getAllApprenants = async (req, res) => {
  try {
    const apprenants = await Apprenant.findAll({
      include: {
        model: Partenaire,
        as: "partenaire",
        attributes: ["id", "sigle", "denomination"],
      },
    });
    res.json(apprenants);
  } catch (err) {
    console.error("Error fetching apprenants: ", err);
    res
      .status(500)
      .json({ error: "Error fetching apprenants", message: err.message });
  }
};


const getOneApprenant = async (req, res) => {
  const { id } = req.params;
  try {
    const apprenant = await Apprenant.findByPk(id, {
      include: {
        model: Partenaire,
        as: "partenaire",
        attributes: ["id", "sigle", "denomination"],
      },
    });
    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant not found" });
    }
    res.json(apprenant);
  } catch (err) {
    console.error("Error fetching apprenant: ", err);
    res
      .status(500)
      .json({ error: "Error fetching apprenant", message: err.message });
  }
};


const postApprenant = async (req, res) => {
  try {
    const newApprenant = await Apprenant.create(req.body);
    res.status(201).json(newApprenant);
  } catch (err) {
    console.error("Error creating apprenant: ", err);
    res
      .status(500)
      .json({ error: "Error creating apprenant", message: err.message });
  }
};


const updateApprenant= async (req, res) => {
    try {
      const apprenant = await Apprenant.findByPk(req.params.id);
      if (!apprenant) {
        return res.status(404).json({ message: "Apprenant introuvable" });
      }
      await apprenant.update(req.body);
      res.json(apprenant);
    } catch (error) {
      console.error('Error updating Apprenant: ' + error.stack);
      res.status(500).json({ message: error.message });
    }
  };


  const deleteApprenant = async (req, res) => {
    try {
      const apprenant = await Apprenant.findByPk(req.params.id);
      if (!apprenant) {
        return res.status(404).json({ message: "Apprenant introuvable" });
      }
      await apprenant.destroy();
      res.sendStatus(204);
    } catch (error) {
      console.error('Error deleting Apprenant: ' + error.stack);
      res.status(500).json({ message: error.message });
    }
  };
  


module.exports = {
  getAllApprenants,
  getOneApprenant,
  postApprenant,
  deleteApprenant,
  updateApprenant
};
