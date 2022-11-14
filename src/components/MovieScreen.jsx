import React from "react";

function MovieScreen({ watchList, movieList, setPage, page}) {

    const movieDisplay = movieList.map((original_title) => <h2>{original_title}</h2>)
    return (
        <div className="page">
            <h1>Peyton's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen