const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    filename: { type: String, required: true, unique: true },
    cast: { type: Object, required: true, unique: true },
    releasedate: { type: Date, required: true },
    Imdbrating: { type: String, default: "" },
    CoverPhoto: { type: String, default: "" },
    releasedate: { type: Date, required: true },
    StreamURl: { type: String, default: "" },
    SubtitleURL: { type: String, default: "" },
    trailer: { type: String },
    HeaderLogo: { type: String, default: "" },
    year: { typr: String },
    genre: { type: String }

},

    { timestamps: true }


);

module.exports = mongoose.model("Movie", MovieSchema);