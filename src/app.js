const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const static_path=path.join(__dirname,"../public"); 
partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));

app.set("view engine", "hbs"); // telling which templet engine we are using.
app.set("views","../templates/views"); // Giving path for the views folder where wee have kept all out hbs files.

hbs.registerPartials(partialsPath); // path of the folder where partials is kept.

//routing
app.get("/", (req, res) => {
 res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "OOPS! page not found", //I can pass this error message to the 404error page directly from here
  });
});

app.listen(port, (req, res) => {
  console.log(`Server has started on port ${port}`);
});
