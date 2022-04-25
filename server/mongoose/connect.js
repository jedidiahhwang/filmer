const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jedidiahhwang:!Finnegan042020!@filmer.auo7v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));