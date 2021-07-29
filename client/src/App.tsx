import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import NoAuth from "./pages/NoAuth";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/noauth" component={NoAuth}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
