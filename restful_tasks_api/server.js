const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json()); 

mongoose.connect("mongodb://localhost/quoting", { useNewUrlParser: true,useUnifiedTopology: true });


require('./server/models/task.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log('Listening on port 8000');
});
