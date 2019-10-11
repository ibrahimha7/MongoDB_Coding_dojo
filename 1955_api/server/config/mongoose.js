const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")


mongoose.connect("mongodb://localhost/quoting", { useNewUrlParser: true,useUnifiedTopology: true });

const models_path = path.join(__dirname, "./../models")

fs.readdirSync(models_path).forEach(file => {
	if(file.toLowerCase().includes(".js")){
		require(path.join(models_path, file))
	}
})