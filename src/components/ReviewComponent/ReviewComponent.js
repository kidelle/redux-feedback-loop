import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class ReviewComponent extends Component {

    // set state
    state = {
        feeling: this.props.reduxStore.feelingReducer,
        understanding: this.props.reduxStore.understandingReducer,
        support: this.props.reduxStore.supportReducer,
        comments: this.props.reduxStore.commentsReducer

    }
    
    nextPage = (event) => { 

      // Send a POST request to server to pass feedback info
        Axios.post('/feedback', this.state)
        .then(response => {
            console.log(this.state);
            alert('Thank You For Your Feedback!')
            this.props.dispatch({type: 'CLEAR', payload: this.state});
        }).catch(error => {
            alert('Could not submit your feedback. Try again later.', error)
        })
    // this will route you to success page page after you review
        this.props.history.push('/success')
    }
    render() {
        return (
            <>
            <h1>Review Your Feedback:</h1>
              
             
                <h2>Feeling: {this.props.reduxStore.feelingReducer}</h2>
                <h2>Understanding: {this.props.reduxStore.understandingReducer}</h2>
                <h2>Support: {this.props.reduxStore.supportReducer}</h2>
                <h2>Comments: {this.props.reduxStore.commentsReducer}</h2>
                <button onClick={(event) => this.nextPage(event)} type="button">SUBMIT</button>
           
            </>
        )
    }
}
          
        
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(ReviewComponent);