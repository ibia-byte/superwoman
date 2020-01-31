import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/layout/Header";

import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import AddMovie from "./components/AddMovie";

import "./App.css";
class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddMovie/>
            <Route exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo />
                
                </React.Fragment>
              )}
            />
            <Route path='/About' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
