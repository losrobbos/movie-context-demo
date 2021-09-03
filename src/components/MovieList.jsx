import { useContext } from "react";
import { MovieContext } from '../contexts/MovieContext'
import MovieCard from "./MovieCard";

const MovieList = () => {

  // hole MOVIES ARRAY aus zentralem (!) State (= Context Box!)
  const { movies, setMovies } = useContext( MovieContext ) // useContext HOLT MIR DATEN aus der zentralen BOX!

  const addMovie = () => {
    const titleNew = prompt("Neuen Title bitte bro!")
    if(!titleNew) return

    // generere neues Movie Objekt
    const movieNew = { id: Date.now().toString(), title: titleNew }

    // create copy and add new movie on top
    setMovies( [...movies, movieNew] )
  }

  // loope über MOVIES ARRAY
  // rendere für jeden Movie eine MovieCard
  return ( <div>
    { 
    movies.map( movie => (
      <MovieCard key={movie.id} movie={movie} />
    )) 
    }
    <button onClick={ addMovie }>Adde Movie</button>
  </div> );
}
 
export default MovieList;