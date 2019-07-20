import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class SupportedComponent extends Component {

    nextPage = () => { this.props.history.push('/Comments') }

    render() {
        return (
            <>
                <form>
                    <h1>Do you feel supported by Prime staff today?</h1>

                    <p>Feeling?</p>
                    <select>
                        <option value="1">1: I feel abandoned.</option>
                        <option value="2">2: I don't feel supported.</option>
                        <option value="3">3: I feel slightly supported.</option>
                        <option value="4">4: I feel pretty supported .</option>
                        <option value="5">5: I feel supported!.</option>
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

export default connect(mapReduxStoreToProps)(SupportedComponent);