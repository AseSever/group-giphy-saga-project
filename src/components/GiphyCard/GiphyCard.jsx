import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        maxWidth: 'auto',
        padding: 10,
        marginTop: '1em',
    },
    media: {
        width: 300,
        height: 300,
    },
});


function GiphyCard(props) {
    const classes = useStyles();


    const favoriteIt = () => { 
        console.log("you favorited this!");
        props.dispatch({ type: 'ADD_FAVORITE', payload: ''})
    
    }
  

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    image={`${props.gif.images.original.url}`}
                    className={classes.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="h5">
                       {props.gif.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary" onClick={favoriteIt} > Favorite this! </Button>
              


<!-- 
// const mapPropsToState = (reduxState) => {
//     return {
//         searchResults: reduxState.searchResults
//     }
// }
 -->

export default connect()(GiphyCard);
