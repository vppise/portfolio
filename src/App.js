import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routers from './helpers/routes/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route component={Routers} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
