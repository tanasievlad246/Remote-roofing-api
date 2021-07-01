import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
