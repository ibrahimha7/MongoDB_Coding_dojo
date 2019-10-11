const mongoose = require('mongoose');

mongoose.model('Task', new mongoose.Schema ({
    title: String,
    description: String,
    completed:Boolean,
}, { timestamps: true }));

