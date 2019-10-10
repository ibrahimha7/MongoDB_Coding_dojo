//var quotes = require("../models/quote.js");
var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");

//var moment = require("moment");

module.exports = {

    index: function(req, res){
        console.log("Root");
        res.render("index");
    },

    quotePage: function(req, res){
        console.log("Get!");
        arr = Quote.find({},(err, quotes) => {
            res.render('quotes', {arr:quotes});
          })
    },

    addQuote: function(req, res){
        const quote = new Quote();
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
          .then(newQuoteData => console.log('new Quote Added: ', newQuoteData))
          .catch(err => console.log(err));
        res.redirect('/');
    }
}