import React, { Component } from 'react';
import { connect } from 'react-redux';


class SuccessComponent extends Component {

    // this will route you back to landing page
    nextPage = () => { this.props.history.push('/')
    // this will clear the inputs when you restart the feedback survey
    this.props.dispatch({type: 'SET_FEELING', payload: ''});
    this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: '' });
    this.props.dispatch({ type: 'SET_SUPPORT', payload: '' });
    this.props.dispatch({ type: 'SET_COMMENTS', payload: '' });

}

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