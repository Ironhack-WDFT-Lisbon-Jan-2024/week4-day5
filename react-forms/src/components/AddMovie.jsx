import {useState} from 'react';

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setImdbRating] = useState(5);
  const [hasOscars, setOscars] = useState(false);

  function handleSubmit(e){
    // Prevent Default Action of a Form' submission (refresh the page).
    // Why? With the refresh of a page, the state values go to original values. 

    e.preventDefault();

    // Create a new Object with title, director, IMDBRating, hasOscars properties
    const newMovie = {title, director, IMDBRating, hasOscars};

    // This way, we add the new movie to the movie list parent component.
    props.addNewMovie(newMovie);

    // Reset the state, so I don't have to delete all the fields if I want to create a second new Movie.
    setTitle("");
    setDirector("");
    setImdbRating(5);
    setOscars(false);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Director</label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <label>IMDB Rating</label>
        <input
          type="number"
          name="imdb-rating"
          value={IMDBRating}
          onChange={(e) => setImdbRating(e.target.value)}
        />
        <label>Won Oscars:</label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
          onChange={(e) => setOscars(e.target.checked)}
        />

        <button type="submit">Add a Movie</button>
      </form>
    </section>
  );
}

export default AddMovie;
