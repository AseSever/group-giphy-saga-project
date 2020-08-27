import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import GiphyCard from '../GiphyCard/GiphyCard';
import { connect } from 'react-redux';

class Search extends Component {
    getGifs = () => {
        this.props.dispatch({type: 'FETCH_RESULTS', payload: 'bananas'})
       //ask saga to make a get request
       console.log(this.props.searchResults);

    }
    componentDidMount =() => {
        this.getGifs()
    }

    render() {
        return (
            <div>
                  <div>
                <Grid container>
                    <Grid item xs={12}>
                        {this.props.searchResults.map((gif, i ) => {
                            return <GiphyCard
                                style={{ margin: '3em' }}
                                key={i}
                                gif={gif}
                              />
                        })}
                    </Grid>
                </Grid>
            </div>
            </div>
        );
    }
}

const mapPropsToState = (reduxState) => {
    return {
        searchResults: reduxState.searchResults
    }
}

export default connect(mapPropsToState)(Search);
