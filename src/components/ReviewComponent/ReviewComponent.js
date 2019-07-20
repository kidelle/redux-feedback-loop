import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class ReviewComponent extends Component {

    nextPage = () => { this.props.history.push('/Success') }

    render() {
        return (
            <>
            <h2>Review Your Feedback</h2>
          {this.props.reduxStore.reviewReducer.map((item, i) => {
            return( <ul key ={i}>
                <li>Feelings: {item.feelings}</li>
                <li>Understanding: {item.understanding}</li>
                <li>Support: {item.supported}</li>
                <li>Comments: {item.comments}</li>
                <button onClick={(event) => this.nextPage()} type="submit">SUMBIT</button>
            </ul>)
          })}
          </>
        )
    }
      

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(ReviewComponent);