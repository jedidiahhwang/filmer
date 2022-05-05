import React, {useEffect, useState} from "react";
import axios from "axios";

import MovieImage from "./SubComponents/MovieImage.js";

import "../SASS/_landing.scss";

const Landing = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        axios.get("/tmdb/getPopularMovies")
            .then((res) => {
                setPopularMovies([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    

    return (
        <div id="landing-container">
            <section id="landing">
                <div id="movie-image-container">
                </div>
            </section>
        </div>
    )
}

export default Landing