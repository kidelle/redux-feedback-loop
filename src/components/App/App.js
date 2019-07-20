import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Set Up Routes
import Comments from '../CommentsComponent/CommentsComponent';
import Feelings from '../FeelingsComponent/FeelingsComponent';
import Landing from '../LandingPageComponent/LandingPageComponent';
import Review from '../ReviewComponent/ReviewComponent';
import Success from '../SuccessComponent/SuccessComponent';
import Supported from '../SupportedComponent/SupportedComponent';
import Understanding from '../UnderstandingComponent/UnderstandingComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
       <Router>
         <Route path="/" exact component={Landing} />
         <Route path="/Feelings" component={Feelings} />
         <Route path="/Understanding" component={Understanding} />
         <Route path="/Supported" component={Supported} />
         <Route path="/Comments" component={Comments} />
         <Route path="/Review" component={Review} />
         <Route path="/Success" component={Success} />
       </Router>
      </div>
    );
  }
}

export default App;
