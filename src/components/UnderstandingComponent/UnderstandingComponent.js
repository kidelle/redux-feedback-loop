import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class UnderstandingComponent extends Component {

    nextPage = () => { this.props.history.push('/Supported') }

    render() {
        return (
            <>
                <form>
                    <h1>How well are you understanding the content?</h1>

                    <p>Understanding?</p>
                    <select>
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