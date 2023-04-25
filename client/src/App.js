import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/search';


function App() {
  return (
    <Router>
            <>
            <Routes>
                <Route
                path='/search'
                element={<Search />}
                />
            </Routes>
            </>
    </Router>
  );
}

export default App;
