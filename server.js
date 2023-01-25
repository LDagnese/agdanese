const express = require("express");
const path = require("path");
const routes = require("./controllers/");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(3001, () => {
  console.log(`API server now listening on port 3001`);
});
