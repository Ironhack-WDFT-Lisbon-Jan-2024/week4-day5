import { useState } from "react";
import moviesDataJSON from "../assets/data/movies.json";
import MovieDetails from "./MovieDetails";
import AddMovie from "./AddMovie";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);

  // Function to add a new Movie
  function addNewMovie(newMovie){
    // [...] -> the spread operator captures every element inside an array and adds it into a new one. 
    // Here, we're saying that we want all the movies PLUS a new one (the one that was created by the user).
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  }

  return (
    <div>
      <h2>Movie List</h2>
      {/* Send addNewMovie function as Props, so I can call it once I create a new Movie. */}
      <AddMovie addNewMovie={addNewMovie} />
      {movies.map((movie) => {
        return <MovieDetails key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
