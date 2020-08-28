import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import GiphyCard from '../GiphyCard/GiphyCard';
import SearchField from '../SearchField/SearchField'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: 500,
      height: 450,
    },
}));

function Search(props) {
    const classes = useStyles();

    const getGifs = (searchText) => {
        console.log(searchText);
        if ( searchText === undefined){
            props.dispatch({ type: 'FETCH_RESULTS', payload: 'danger'})
        } else if (searchText.search === "" ){
            props.dispatch({ type: 'FETCH_RESULTS', payload: 'danger'})
        } else {
            props.dispatch({ type: 'FETCH_RESULTS', payload: searchText.search })
        }

    }
    //does essentially what componentdidMount does
    useEffect(getGifs, [])

        return (
           <div>
                <SearchField getGifs={getGifs} />
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
        searchResults: reduxState.searchResults,
    }
}

export default connect(mapPropsToState)(Search);

