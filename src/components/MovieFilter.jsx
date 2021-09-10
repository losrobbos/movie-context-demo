
// ZUHAUSE => Spaghetitti => Schrank => useState => LOKAL
// SUPERMARKT (=Context) => CENTRAL STATE => useContext
// useContext => Lieferant
// Context => Supermarkt

import { useContext } from "react"
import { MovieContext } from "../contexts/MovieContext"

const MovieFilter = () => {

  // useState => lokal => das heißt Daten, die NUR in dieserComponent verwendet werden!
  // useContext => hole mir Daten aus dem CONTEXT ( aus zentralem (!) State)

  const { searchTerm, setSearchTerm } = useContext( MovieContext )

  const handleChange = (event) => {
    setSearchTerm( event.target.value )
  }

  return <div className="filter">
    
    <input type="text" 
      placeholder="Jetzt such, ey!" 
      value={ searchTerm } 
      onChange={  handleChange }
    />
  
  </div>

}

export default MovieFilter