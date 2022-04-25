const mongoose = require("mongoose");
require("dotenv").config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    movies: [
        movie = {
            name: String,

        }
    ]
})