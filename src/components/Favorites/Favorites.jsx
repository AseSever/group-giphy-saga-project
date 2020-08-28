import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FavoritesCards from '../FavoritesCards/FavoritesCards'
import { useEffect } from 'react';

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

const Favorites = (props) => {
    const classes = useStyles();
    const getFaves = () => {
        props.dispatch({ type: 'FETCH_FAVES'})
    }
    useEffect(() => {
        getFaves();
        console.log('triggering useEffect');
    }, []);

    return (
        <div >
            <h1> Your Favorites! </h1>
            <div className={classes.root}>
            {props.addedFavorites.map((gif, i) => {
                return <FavoritesCards
                    key={i} url={ (decodeURIComponent(gif.url))}
                />
            })}
            </div>
        </div>
    )
}

const mapPropsToState = (reduxState) => {
    return {
        addedFavorites: reduxState.addedFavorites
    }
}

export default connect(mapPropsToState)(Favorites);
