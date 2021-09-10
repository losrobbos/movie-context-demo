import { useContext } from "react";
import { MovieContext } from '../contexts/MovieContext'
import MovieCard from "./MovieCard";

const MovieList = () => {

  // hole MOVIES ARRAY aus zentralem (!) State (= Context Box!)
  const { movies, setMovies, searchTerm } = useContext( MovieContext ) // useContext HOLT MIR DATEN aus der zentralen BOX!

  const addMovie = () => {
    const titleNew = prompt("Neuen Title bitte bro!")
    if(!titleNew) return

    // generere neues Movie Objekt
    const movieNew = { id: Date.now().toString(), title: titleNew }

    // create copy and add new movie on top
    setMovies( [...movies, movieNew] )
  }

  // loope über MOVIES ARRAY
  // rendere für jeden Movie im Array eine MovieCard => und gebe Daten des Movies als Prop hinein!

  let moviesToDisplay = movies 

  // wenn Search term => dann filtere movies nach searchTerm und displaye FILTERED liste!
  // movie => { id: 123, title: "XYZ", price: 5.9 }
  if(searchTerm) {
    // schaue, ob searchTerm in title ENTHALTEN (=included) ist
    const searchTermLc = searchTerm.toLowerCase()
    moviesToDisplay = movies.filter( movie => movie.title.toLowerCase().includes( searchTermLc ) )
  }

  const jsxMovies = moviesToDisplay.map( movie => <MovieCard key={movie.id} movie={movie} /> ) 

  return ( 
    <div>
      { jsxMovies }
      <button onClick={ addMovie }>Adde Movie</button>
    </div> 
  );
}
 
export default MovieList;