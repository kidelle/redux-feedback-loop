import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class SupportComponent extends Component {

    // set state
    state = {
        support: 0
    }

    handleChange = (event) => {
        this.setState ({
            support: event.target.value
        })
    }
    // this will grab input and route to the next page
    nextPage = () => { 
        this.props.dispatch({type: 'SET_SUPPORT', payload: this.state.support});
        this.props.history.push('/comments')
    
    }

    render() {

        console.log(this.state);

        return (
            <>
                <form>
                    <h1>Do you feel supported by Prime staff today?</h1>

                    <h3>Please choose an option below that best describes how you feel.</h3>
                    <select value={this.state.support} onChange={(event) => this.handleChange(event)}>
                        <option value="1">1: I feel abandoned.</option>
                        <option value="2">2: I don't feel supported.</option>
                        <option value="3">3: I feel slightly supported.</option>
                        <option value="4">4: I feel pretty supported .</option>
                        <option value="5">5: I feel supported!.</option>
                    </select>

                    <button onClick={(event) => this.nextPage()} type="button">NEXT</button>
                </form>
                <ReviewComponent />
            </>
        )
    }


}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(SupportComponent);