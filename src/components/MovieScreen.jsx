import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({ watchList, movieList, setPage, page, addMovie, removeMovie }) {

    const decrement = () => {
        setPage(page - 1)
    };

    const increment = () => {
        setPage(page + 1)
    };

    const movieDisplay = movieList.map((movie, index) => <MovieCard watchList={watchList} removeMovie={removeMovie} addMovie={addMovie} movie={movie} />)
    return (
        <div className="page">
            <h1>Peyton's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen