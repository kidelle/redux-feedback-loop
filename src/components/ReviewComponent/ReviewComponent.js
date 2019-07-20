import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class ReviewComponent extends Component {

    nextPage = () => { this.props.history.push('/') }

    render() {
        return (
          {this.props.reduxStore.feedbackReducer.map((feedback, i) => key ={i})}
        )
    }
        <button onClick={(event) => this.nextPage()} type="submit">SUMBIT</button>

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(ReviewComponent);