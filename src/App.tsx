import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HeaderPath from './components/Header/HeaderPath';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <HeaderPath />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
