var quotes = require("../controllers/quotes");

module.exports = function(app){

    app.get("/", quotes.index)
    
    app.get("/quotes", quotes.quotePage)   

    app.post("/add", quotes.addQuote)
}
