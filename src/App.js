import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Static/Home/Home';
import Cars from './Components/Static/Cars/Cars';
import SingleCar from './Components/Static/SingleCar/SingleCar';
import Login from './Components/Static/Login/Login';
import Register from './Components/Static/Register/Register';
import AuthProvider from './Context/AuthProvider';
import UserOnly from './PrivateRoute/UserOnly/UserOnly';
import Dashboard from './Components/Static/Dashboard/Dashboard';
import Review from './Components/Static/Review/Review';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <UserOnly path="/cars/:id">
              <SingleCar />
            </UserOnly>
            <Route path="/cars">
              <Cars />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <UserOnly path="/dashboard">
              <Dashboard />
            </UserOnly>
            <Route path='/reviews'>
              <Review />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
