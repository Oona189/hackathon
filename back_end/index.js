const express = require("express");
const db = require("./models");
const cors = require("cors");
const formationRoute = require("./routes/formationRoute");
const themeRoute = require("./routes/themeRoute");
const formateurRoute = require("./routes/formateurRoute");
const partenaireRoute = require("./routes/partenaireRoute");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/formation", formationRoute);
app.use("/theme", themeRoute);
app.use("/formateur", formateurRoute);
app.use("/partenaire", partenaireRoute);

// App launching
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
