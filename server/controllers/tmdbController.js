require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.API_KEY;

module.exports = {
    getPopularMovies: (req, res) => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
            .then((response) => {
                console.log("getPopularMovies hit");
                res.status(200).send(response.data.results);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).send(err);
            })
    },
    searchMovie: (req, res) => {
        let {movie} = req.query;
        
        if(movie) {
            movie = movie.trim();
            
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
    searchPerson: (req, res) => {
        let {person} = req.query;
        
        if(person) {
            person = person.trim();

            axios.get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${person}`)
                .then((response) => {
                    res.status(200).send(response.data);
                })
                .catch((err) => {
                    res.status(400).send(err);
                })
        } else {
            res.status(400).send("Please provide a name");
        }
    }

}