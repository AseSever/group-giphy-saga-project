import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Axios from 'axios';
// import { response } from 'express';
import { connect } from 'react-redux';


class Favorites extends Component {
    
    componentDidMount() {
        this.getFaves();
    }

    getFaves = () => {
        Axios.get('/api/favorite')
        .then((response) => {
            this.props.dispatch({type: 'SET_FAVORITES', payload: response.data.data});
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        
        return (
            <div>
                {/* {this.props.reduxState.} */}
                <div>{JSON.stringify(this.props.reduxState)}</div>
            </div>
        );
    }
}

const mapPropsToState = reduxState => ({
    reduxState
});

export default connect(mapPropsToState)(Favorites);
