const express = require("express");
const db = require("./models");
const cors = require("cors");
const formationRoute = require("./routes/formationRoute");

const app = express();
// middlewares
app.use(cors());
app.use(express.json());

// formation
app.use("/formation", formationRoute);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
