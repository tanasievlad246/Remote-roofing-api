import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* Wrap in protected route and pass auth result as prop */}
          <ProtectedRoute exact path="/" component={() => <Home authenticated={true}/>} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
