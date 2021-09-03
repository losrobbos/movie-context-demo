import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

function App() {

  return (
    <div className="App">

      {/* HEADER */}
      <header className="App-header">
        <h1>MovieList</h1>        
      </header>

      <main>
        <MovieList></MovieList>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
