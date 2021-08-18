  import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddTutorial from "./components/AddTutorial";
import TutorialList from './components/TutorialList';
import ViewTutorial from './components/ViewTutorial';


function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialList} /> 
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/tutorials/:id" component={ViewTutorial} /> 
          </Switch>
        </div>
  </Router>
  );
}

export default App;
