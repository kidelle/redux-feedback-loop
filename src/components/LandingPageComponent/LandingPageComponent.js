import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class LandingPageComponent extends Component {


    render() {
        return (
            <>
                <div>
                    <h1>Landing Page</h1>

                    <h2>Please complete feedback.</h2>

                    <h3>Click NEXT to get started!</h3>

                    <button type="submit">Start Feedback</button>
                </div>
            </>
        )
    }


}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(LandingPageComponent);