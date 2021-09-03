// SETUP A BOX WITH MOVIE DATA

import { createContext, useState } from "react";

// BOX => Component => hat State! (=CENTRAL STATE)
// BOX kann ihren State mit anderen Components teilen!

// 1) BOX => hat die Daten
// 2) PROVIDER => bringt die Daten zu den Components

// BOX => Pizzabox, PROVIDER => Lieferando Fahrer

// BOX
export const MovieContext = createContext() // => kreirt zentrale BOX für Daten

// PROVIDER (=HOC)
const MovieProvider = (props) => {

  // DATEN die ich mit all meinen Components TEILEN will
  // = CENTRAL STATE!
  const [movies, setMovies] = useState([
    { id: "1", title: "Greeland" },
    { id: "2", title: "Haus des Geldes" },
    { id: "3", title: "Outlander" },
  ])

  const [pizzas, setPizzas] = useState([
    {id: "p1", title: "Funghi"},
    {id: "p2", title: "Margeritha"},
    {id: "p3", title: "Teriyaki"},
  ])

  // alle Daten, die ich mit Components teilen will
  const sharedData = { movies, setMovies, pizzas, setPizzas }

  // Provider WRAPPT unsere ganze App!
  // Und brint die Daten zu ALLEN Components
  // value => alle Daten, die geteilt werden sollen mit allen Components
  return <MovieContext.Provider value={ sharedData }>
      { props.children }
    </MovieContext.Provider>
}

export default MovieProvider

/**
 * 
 * <Provider>
 *    <App>
 *      <PizzaList> => hat Zugriff auf Pizzas
 *      <MovieList> => hat Zugriff auf Movies
 *    </App>
 * </Provider>
 */