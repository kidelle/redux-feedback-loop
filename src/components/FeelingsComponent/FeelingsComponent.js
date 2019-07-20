import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class FeelingsComponent extends Component{


render() {
    return (
        <>
        <form>
        <h1>How are you feeing today?</h1>

        <p>Feeling?</p>
        <input type="number"></input>
            </form>
        </>
    )
}


}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(FeelingsComponent);