import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({ watchList, movieList, setPage, page, addMovie}) {

    const movieDisplay = movieList.map((movie, index) => <MovieCard addMovie={addMovie} movie={movie} />)
    return (
        <div className="page">
            <h1>Peyton's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen