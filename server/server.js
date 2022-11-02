const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function(req, res) { // / is just the home page
    res.sendFile(path.join(__dirname, "../public/index.html")); // dirname is just a variable, .. for index.html because we need to go up a level to access it
});

app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.css"));
});

const port = process.env.PORT || 4005; // default to PORT 4005 for local deployment before client need

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});

