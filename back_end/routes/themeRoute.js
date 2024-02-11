const express = require("express");
const themeController = require("../controllers/themeController");
const { Theme } = require("../models");

const router = express.Router();

router.get("/", themeController.getAllThemes);

router.post("/", themeController.postTheme);
router.get("/:id", themeController.getOneTheme);
router.put("/:id", themeController.updateTheme);
router.delete("/:id", themeController.deleteTheme);

module.exports = router;
