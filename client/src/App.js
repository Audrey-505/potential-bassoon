import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/search';
import PokeResults from './components/PokeResults';


function App() {
  return (
    <Router>
            <>
            <Routes>
                <Route
                path='/search'
                element={<Search />}
                />
                <Route
                path='/results'
                element={<PokeResults />}
                />
            </Routes>
            </>
    </Router>
  );
}

export default App;
