var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/quoting", { useNewUrlParser: true,useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const AnimalSchema = new mongoose.Schema(
  {
    name: String,
    color: String
  },
  { timestamps: true }
);
const Animal = mongoose.model("Animal", AnimalSchema);

app.get("/",(req, res) => {
  arr = Animal.find({}, (err, animals) => {
    res.render("index", { arr: animals });
  });
});
app.get("/new", (req, res) =>{
  res.render("new");
});

app.post("/add", (req, res) =>{
  console.log("POST DATA", req.body);
  var animal = new Animal({
    name: req.body.name,
    color: req.body.color
  });
  animal.save(function(err) {
    if (err) {
      console.log("something went wrong");
      console.log(animal.errors);
      res.redirect("/");
    } else {
      console.log("successfully added a Animal!");
      res.redirect("/");
    }
  });
});

app.get("/edit/:id", (req, res) => {
  mongo = Animal.findOne({ _id: req.params.id }, function(err, animal) {
    console.log(animal);
    res.render("edit", { mongo: animal });
  });
});
app.post("/edit/:id",(req, res) => {
  console.log("POST DATA", req.body);
  Animal.update(
    { _id: req.params.id },
    { name: req.body.name, color: req.body.color },
    function(err) {
      if (err) {
        console.log("something went wrong");
        console.log(animal.errors);
        res.redirect(`/edit/${req.params.id}`);
      } else {
        console.log("successfully changed a Animal!");
        res.redirect('/');
      }
    }
  );
});
app.post("/delete/:id", (req, res) => {
  Animal.remove({ _id: req.params.id }, function(err) {
    console.log("RECORD DELETED");
    res.redirect("/");
  });
});
app.get("/info/:id", (req, res) => {
  mongo = Animal.findOne({ _id: req.params.id }, function(err, animal) {
    console.log(animal);
    res.render("info", { mongo: animal });
  });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
});
