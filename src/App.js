
import './style/index.css';
import { BrowserRouter as  Router, Routes, Route, HashRouter } from "react-router-dom"
import Header from './components/Header';
import MovieList from './components/MovieList';
import Home from './pages/Home';
import Movie from './pages/movieDetail';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import AddMovies from './components/AddMovies';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Router>
          <Header />
          <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="*" element={<NotFound />} />
                <Route path="/AddMovies" element={<AddMovies />} />
            </Routes>
            <Footer />
        </Router>
        </HashRouter>
    </div>
  );
}

export default App;
