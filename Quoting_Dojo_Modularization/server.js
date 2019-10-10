const express = require("express");

var bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quoting", { useNewUrlParser: true,useUnifiedTopology: true });
//require("./server/config/mongoose.js");
//Models
require('./server/models/Quote');



const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

//Route
require("./server/config/routes.js")(app);


var path = require("path");


app.set('view engine', 'ejs');




/* const QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});
// create an object to that contains methods for mongoose to interface with MongoDB
const Quotes = mongoose.model("Quote", QuoteSchema);
 */
/* app.get("/", (req, res) => {
  res.render("index");
});

app.post('/add', (req, res) =>{
    const quote = new Quotes();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    quote.save()
      .then(newQuoteData => console.log('new Quote Added: ', newQuoteData))
      .catch(err => console.log(err));
    res.redirect('/');
  }) */
  /* 
  app.get('/quotes', (req, res) => {
    arr = Quotes.find({},(err, quotes) => {
      res.render('quotes', {arr:quotes});
    })
  }) */

  app.listen(8000, () => console.log("listening on port 8000"));