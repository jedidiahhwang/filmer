const User = require("../mongoose/setup.js");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

/*
    Every endpoint has a preliminary check to make sure there is a session. Even though you
    can assume that there is always a session to access recipes, this is just a safety check, 
    along with using Postman.
*/

module.exports = {
    addMovie: async (req, res) => {
        if(!req.session.user) {
            return res.status(400).send("There is no user session");
        } else if(req.session.user && req.query) {
            // Grab the current user using the session user's email.
            const currentUser = await User.findOne({email: req.session.user.email});

            const {movie} = req.query;
        
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })

            // currentUser.movies.push(req.body); // Assuming the data is saved on body.
            // currentUser.save();

            req.session.user = currentUser;

            return res.status(200).send(currentUser);
        }
    }
}