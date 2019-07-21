import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

class CommentsComponent extends Component {

    // set state
    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState ({
            comments: event.target.value
        });
    }
    // this will grab input and route to the next page
    nextPage = () => { 
        
        this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments});
        this.props.history.push('/Review') }

    render() {

        console.log(this.state);


        return (
            <>
                <form>
                    <h1>How are you feeing today?</h1>

                    <h2>Is there anything you'd like us to know?</h2>
                   <input value={this.state.comments} onChange={(event) => this.handleChange(event)} 
                        placeholder="Leave any comments here."></input>

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

export default connect(mapReduxStoreToProps)(CommentsComponent);