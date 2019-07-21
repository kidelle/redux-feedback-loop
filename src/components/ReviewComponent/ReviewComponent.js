import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class ReviewComponent extends Component {

    nextPage = () => { this.props.history.push('/Success') }

    render() {
        return (
            <>
            <h2>Review Your Feedback</h2>
              
             
                <h2>Feelings: {this.props.reduxStore.feelingsReducer.feelings}</h2>
                <h2>Understanding: {this.props.reduxStore.undertandingReducer.understanding}</h2>
                <h2>Supported: {this.props.reduxStore.supportedReducer.supported}</h2>
                <h2>Comments: {this.props.reduxStore.commentsReducer.comments}</h2>
                <button onClick={(event) => this.nextPage()} type="submit">SUMBIT</button>
           
            </>
        )
          
        
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(ReviewComponent);