import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateVehicle from "./components/create";
import EditVehicle from "./components/edit";
import VehicleList from "./components/list";
import CreateUser from "./components/Usercomponents/signUp";
import LogUser from "./components/Usercomponents/Login";
import search from "./Search";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">MilijuliYatayat</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/list'} className="nav-link">lists</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signUp'} className="nav-link">SignUp</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Add your own Vehicles</Link>
                </li>
                
                
              </ul>
              <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search by vehicle or location" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search  </button>
               </form>
               
            </div>
          </nav> <br/>
          <h2>Welcome to MilijuliYatayat</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ CreateVehicle } />
              <Route path='/edit/:id' component={ EditVehicle } />
              <Route path='/list' component={ VehicleList } />
              <Route path='/signUp' component={ CreateUser} />
              <Route path='/login' component={ LogUser} />
              <Route path='/search' component={ search} />

              

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
