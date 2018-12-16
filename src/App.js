import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gaming from './Component/Gaming';
import About from './Component/About';
import Gaa from './Component/Gaa';
import Header from './Component/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import Example from './Component/Example';
import App1 from './App1';
class App extends Component {
  func1(){
    window.location="http://localhost:3000";
  }
  render() {
    return (
     
    <div >  
       <div>
       <Button onClick={this.func1} color="red">Return My Homie</Button>
        <a href='https:google.com'>Liên hệ mình để đăng kí :0987654321</a>

        <Header/> 
      
    <Router>    
      <Switch>
           
          <Route exact path='/gaming' component={Gaming}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/gaa' component={Gaa}/>
          <Route exact path='/' component={Example}/>
      </Switch>
    </Router>  

      </div>
    </div>  
       
    );   
  }
};

export default App;
