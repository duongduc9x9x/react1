import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Gaming from './Component/Gaming';
import App2 from './App2';
import About from './Component/About';
import Gaa from './Component/Gaa';

 class App1 extends Component {
  render() {
    return (
      <div>
        <Router>
   
      <Switch>
          <Route exact path='/gaming' component={Gaming}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/gaa' component={Gaa}/>
          
      </Switch>
    
    </Router>  

      </div>
    )
  };
};
export default App1;