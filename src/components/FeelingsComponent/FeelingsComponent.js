import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class FeelingsComponent extends Component{

    nextPage = () => { this.props.history.push('/Understanding') }

render() {
    return (
        <>
        <form>
        <h1>How are you feeing today?</h1>

        <p>Feeling?</p>
        <select>
            <option value="1">1: I'm feeling very stressed.</option>
            <option value="2">2: I'm feeling stressed.</option>
            <option value="3">3: I'm feeling OK.</option>
            <option value="4">4: I'm feeling good.</option>
            <option value="5">5: I'm feeling great.</option>
        </select>

                <button onClick={(event) => this.nextPage()} type="submit">NEXT</button>
            </form>
            <ReviewComponent />
        </>
    )
}


}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(FeelingsComponent);