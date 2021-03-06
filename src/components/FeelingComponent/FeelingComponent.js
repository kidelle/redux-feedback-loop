import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewComponent from '../ReviewComponent/ReviewComponent';


class FeelingComponent extends Component{

    // set state
    state = {
        feelings: 0
    }
       

    handleChange = (event) => {
        this.setState ({
            feelings: event.target.value
        });
        
    }
    // this will grab input and route to the next page
    nextPage = () => { 

    this.props.dispatch({type: 'SET_FEELING', payload: this.state.feelings});
     this.props.history.push('/understanding') 

       
}
 

render() {

    console.log(this.state);

    return (

        
        <>
        <form>
        <h1>How are you feeling today?</h1>

        <h3>Please choose an option below that best describes how you feel.</h3>
        <select value={this.state.feelings} onChange={(event) => this.handleChange(event)}>
            
            <option value="1">1: I'm feeling very stressed.</option>
            <option value="2">2: I'm feeling stressed.</option>
            <option value="3">3: I'm feeling OK.</option>
            <option value="4">4: I'm feeling good.</option>
            <option value="5">5: I'm feeling great.</option>
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

export default connect(mapReduxStoreToProps)(FeelingComponent);