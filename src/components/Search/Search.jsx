import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import GiphyCard from '../GiphyCard/GiphyCard';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
}));


function Search(props) {
    const classes = useStyles();
    
    const getGifs = () => {
        props.dispatch({ type: 'FETCH_RESULTS', payload: 'danger' })

    }
    //does essentially what componentdidMount does
    useEffect(getGifs, [])

        return (
            <div>
                <div className={classes.root}>
                        {props.searchResults.map((gif , i) => {
                            return <GiphyCard 
                            key={i}  gif={gif}
                            />
                        })}


                </div>

            </div>
        );
}

const mapPropsToState = (reduxState) => {
    return {
        searchResults: reduxState.searchResults
    }
}

export default connect(mapPropsToState)(Search);

