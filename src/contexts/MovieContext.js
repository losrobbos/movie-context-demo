import { Component, createContext } from "react";

// SETUP A BOX WITH MOVIE DATA

// BOX => Component => hat State! (=CENTRAL STATE)
// BOX kann ihren State mit anderen Components teilen!

// 1) BOX => hat die Daten
// 2) PROVIDER => bringt die Daten zu den Components

// Beispiel:
// BOX => Pizzabox
// PROVIDER => Lieferando Fahrer

// BOX
export const MovieContext = createContext() // => kreirt zentrale BOX für Daten

// PROVIDER (= HOC)
class MovieProvider extends Component {

  // DATEN die ich mit all meinen Components TEILEN will
  // = CENTRAL STATE!
  state = {
    movies: [
      { id: "1", title: "Greeland" },
      { id: "2", title: "Haus des Geldes" },
      { id: "3", title: "Outlander" },
    ],
    pizzas: [
      {id: "p1", title: "Funghi"},
      {id: "p2", title: "Margeritha"},
      {id: "p3", title: "Teriyaki"},
    ]
  }

  addMovie = (movieNew) => {
    this.setState({ movies: [...this.state.movies, movieNew] })
  } 

  // Provider WRAPPT unsere ganze App!
  // Und brint die Daten zu ALLEN Components
  // value => alle Daten, die geteilt werden sollen mit allen Components
  render() {

      // alle Daten, die ich mit Components teilen will
    const sharedData = { 
      movies: this.state.movies, 
      pizzas: this.state.pizzas,
      addMovie: this.addMovie
    }

    return <MovieContext.Provider value={ sharedData }>
      { this.props.children }
    </MovieContext.Provider>

  }
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