import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'


class Favorites extends Component {

    getFaves = () => {

    }

    render() {
        return (
            <div>
                  <div>
                {this.props.reduxStore}
            </div>
            </div>
        );
    }
}

export default Favorites;
