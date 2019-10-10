const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

mongoose.model("Quote", QuoteSchema);
// create an object to that contains methods for mongoose to interface with MongoDB

