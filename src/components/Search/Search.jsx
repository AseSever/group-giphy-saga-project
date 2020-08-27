import React, { Component } from 'react';

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useEffect } from 'react';

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
        //ask saga to make a get request
        console.log(props.searchResults);
    }
    useEffect(getGifs, [])

    console.log( props.searchResults.map(image => {
        return image.images.original
    }))
        return (
            <div>
                <div className={classes.root}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {props.searchResults.map((tile , i) => (
                            <GridListTile key={i} cols={tile.cols || 1} >
                                <img src={`${tile.images.original.url}`} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
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
