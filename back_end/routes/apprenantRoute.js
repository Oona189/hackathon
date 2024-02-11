const express = require("express");
const apprenantController = require("../controllers/apprenantController");

const router = express.Router();

router.get("/", apprenantController.getAllApprenants);
router.post("/", apprenantController.postApprenant);
router.get("/:id", apprenantController.getOneApprenant);
router.delete("/:id", apprenantController.deleteApprenant);
router.put("/:id", apprenantController.updateApprenant);

module.exports = router;
