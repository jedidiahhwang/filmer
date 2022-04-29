require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.API_KEY;

module.exports = {
    searchMovie: (req, res) => {
        let {movie} = req.query;
        movie = movie.trim();

        if(movie) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)
                .then((response) => {
                    res.status(200).send(response.data);
                })
                .catch((err) => {
                    res.status(400).send(err);
                })
        } else {
            res.status(400).send("Please provide a movie title");
        }
    },

}