const MovieCard = (props) => {

  const { movie } = props // => <MovieCard movie={movie} >

  return ( <div className="movie-card">
    { movie.title }
  </div> );
}
 
export default MovieCard