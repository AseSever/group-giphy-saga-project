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
import { useEffect } from 'react';
import { connect } from 'react-redux';
˜
const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        padding: 10
    },
    media: {
        height: 300,
    },
});


function GiphyCard(props) {

    const classes = useStyles();
    //   const [image, setImage] = useState('');
    
    const getRandomPhoto = () => {
        props.dispatch({type: 'GET_GIPHY'})
       //this asks saga to make a get request
    }

    useEffect(getRandomPhoto, [])
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    image={
                        `${props.random}`}
                    className={classes.media}
                    title="temp placeholder"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Random Giphy Image
          </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
            This might be a description
          </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" color="primary" onClick={getRandomPhoto}>
                    next photo </Button>
            </CardActions>
        </Card>
    );
}


const mapPropsToState = (reduxState) => {
    return {
        random: reduxState.random
    }
}

export default connect(mapPropsToState)(GiphyCard);
