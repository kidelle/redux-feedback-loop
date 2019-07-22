import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Set Up Routes
import Comments from '../CommentsComponent/CommentsComponent';
import Feeling from '../FeelingComponent/FeelingComponent';
import Landing from '../LandingPageComponent/LandingPageComponent';
import Review from '../ReviewComponent/ReviewComponent';
import Success from '../SuccessComponent/SuccessComponent';
import Support from '../SupportComponent/SupportComponent';
import Understanding from '../UnderstandingComponent/UnderstandingComponent';

class App extends Component {


  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
       <Router>
         <Route path="/" exact component={Landing} />
         <Route path="/feeling" component={Feeling} />
         <Route path="/understanding" component={Understanding} />
         <Route path="/support" component={Support} />
         <Route path="/comments" component={Comments} />
         <Route path="/review" component={Review} />
         <Route path="/success" component={Success} />
       </Router>
      </div>
    );
  }
}

export default App;
