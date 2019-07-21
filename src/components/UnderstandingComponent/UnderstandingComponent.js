import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class UnderstandingComponent extends Component {

    state = {
        understanding: 0
    }

    handleChange = (event) => {
        this.setState ({
            understanding: event.target.value
        });
    }

    nextPage = () => { 
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state.understanding});
        this.props.history.push('/Supported')
     }

    render() {

        console.log(this.state);

        return (
            <>
                <form>
                    <h1>How well are you understanding the content?</h1>

                    <h3>Please choose an option below that best describes how you feel.</h3>
                    <select value={this.state.understanding} onChange={(event) => this.handleChange(event)}>
                        <option value="1">1: I'm totally lost.</option>
                        <option value="2">2: I don't have this.</option>
                        <option value="3">3: I may not have this.</option>
                        <option value="4">4: I might have this!.</option>
                        <option value="5">5: I've got this!.</option>
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

export default connect(mapReduxStoreToProps)(UnderstandingComponent);