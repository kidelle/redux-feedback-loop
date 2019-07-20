import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class SuccessComponent extends Component {

    nextPage = () => { this.props.history.push('/') }

    render() {
        return (
            <>
                <h1>Feedback Submitted!</h1>

                <section>Thank you! <br />
                    <button onClick={(event) => this.nextPage()} type="submit">Leave New Feedback</button>
                </section>
                
              
            </>
        )
    }


}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(SuccessComponent);