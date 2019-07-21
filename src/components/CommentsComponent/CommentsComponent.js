import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class CommentsComponent extends Component {

    nextPage = () => { this.props.history.push('/Success') }

    render() {
        return (
            <>
                <form>
                    <h1>How are you feeing today?</h1>

                    <h2>Is there anything you'd like us to know?</h2>
                   <input placeholder="Leave any comments here."></input>

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

export default connect(mapReduxStoreToProps)(CommentsComponent);