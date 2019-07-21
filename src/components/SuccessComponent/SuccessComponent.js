import React, { Component } from 'react';
import { connect } from 'react-redux';


class SuccessComponent extends Component {

    // this will route you back to landing page
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