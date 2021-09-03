import { useContext } from "react";
import { MovieContext } from '../contexts/MovieContext'
import MovieCard from "./MovieCard";

const MovieList = () => {

  // hole MOVIES ARRAY aus zentralem (!) State (= Context Box!)
  const { movies, addMovie } = useContext( MovieContext ) // useContext HOLT MIR DATEN aus der zentralen BOX!

  const handleAddMovie = () => {
    const titleNew = prompt("Neuen Title bitte bro!")
    if(!titleNew) return

    // generere neues Movie Objekt
    const movieNew = { id: Date.now().toString(), title: titleNew }

    // add movie to central movies in context...
    addMovie( movieNew )
  }

  // loope über MOVIES ARRAY
  // rendere für jeden Movie im Array eine MovieCard => und gebe Daten des Movies als Prop hinein!
  const jsxMovies = movies.map( movie => <MovieCard key={movie.id} movie={movie} /> ) 

  return ( 
    <div>
      { jsxMovies }
      <button onClick={ handleAddMovie }>Adde Movie</button>
    </div> 
  );
}
 
export default MovieList;