const express = require("express");

const app = express();
const PORT = 3000;

require("dotenv").config();
const {
  submitVolunteerProfile,
  checkVolunteerEmail,
} = require("./src/cloud_functions_sample");
const { dot } = require("node:test/reporters");

app.get("/", (req, res) => {
  res.send("Hello,Express");
});

app.post("/submit-profile", submitVolunteerProfile);

app.post("/check-email", checkVolunteerEmail);

app.listen(PORT, () => {
  console.log(`Serveris running on http://localhost:${PORT}`);
});
