import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { useState } from 'react';
import { connect } from 'react-redux';


const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
        padding: 10
    },
    media: {
        height: 'auto',
    },
});


function GiphyCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    // type='gif'
                    image={props.gif.url}
                    // className={classes.media}
                    title="temp placeholder"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Giphy Images
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button variant="outlined" color="primary" onClick={getRandomPhoto}>
                    next photo </Button> */}
            </CardActions>
        </Card>
    );
}


// const mapPropsToState = (reduxState) => {
//     return {
//         searchResults: reduxState.searchResults
//     }
// }

export default connect()(GiphyCard);