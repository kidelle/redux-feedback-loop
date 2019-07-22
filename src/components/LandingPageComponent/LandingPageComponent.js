import React, { Component } from 'react';
import { connect } from 'react-redux';



class LandingPageComponent extends Component {

    // this will route you to the next page
    nextPage = () => 
    {this.props.history.push('/feeling')}


    render() {
        return (
            <>
                <div>
                    <h1>Landing Page</h1>

                    <h2>Please complete feedback.</h2>

                    <h3>Click NEXT to get started!</h3>

                    <button onClick={(event) => this.nextPage()}type="button">Start Feedback</button>
                </div>
            </>
        )
    }


}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(LandingPageComponent);