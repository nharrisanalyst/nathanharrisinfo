import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import DynamicTask from './components/Task/DynamicTask';
import HeaderPath from './components/Header/HeaderPath';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <HeaderPath />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:taskName" element={<DynamicTask />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
