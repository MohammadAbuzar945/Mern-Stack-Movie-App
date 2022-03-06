const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express()
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/list");


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected Successfuly")).catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/list", listRoute);







app.listen(8800, () => {
    console.log("Backend server is runnung");
})