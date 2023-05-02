const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const chefData = require("./data/chef.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send(chefData);
});
app.listen(port, () => {
  console.log(`server is running on port"&{port}`);
});
