import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routers from './helpers/routes/routes';
import Dashboard from './views/dashboard/dashboard';
import Portfolio from './views/portfolio/portfolio';
import Projects from './views/projects/projects';
import Contact from './views/contact/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
