const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    filename: { type: String, required: true, unique: true },
    type: { type: String },
    content: { type: String },
    genre: { type: String }

},

    { timestamps: true }


);

module.exports = mongoose.model("List", ListSchema);