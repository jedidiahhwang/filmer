import React from "react";

import "../../SASS/_movieimage.scss";

const MovieImage = ({backdrop_path}) => {
    const imageURL = "https://image.tmdb.org/t/p/original/" + backdrop_path;

    return (
        <div id="movie-image-container">
            <img id="movie-image" src={imageURL} />
        </div>
    )
}

export default MovieImage