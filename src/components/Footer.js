import { useContext } from "react";
import { MovieContext } from '../contexts/MovieContext'

const Footer = (props) => {

  // hole MOVIES aus dem central state
  const { movies, pizzas } = useContext( MovieContext ) // lese Daten aus Box mithilfe von useContext

  return ( 

    // ANZAHL Movies anzeigen
    // Footer => soll Daten aus CONTEXT BOX holen!

    <footer>
      <h4> Anzahl der Movies: { movies.length }</h4>
      <h4> Anzahl der Pizzen: { pizzas.length }</h4>
    </footer>

   );
}
 
export default Footer;