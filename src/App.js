import './App.css';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import MovieFilter from './components/MovieFilter';

function App() {

  return (
    <div className="App">

      {/* HEADER */}
      <header className="App-header">
        <h1>MovieList</h1>        
      </header>

      <main>
        <MovieFilter></MovieFilter>
        <MovieList></MovieList>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
