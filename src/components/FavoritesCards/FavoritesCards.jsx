import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        padding: 10,
        marginTop: '1em',
    },
    media: {
        width: 300,
        height: 300,
    },
});

const FavoritesCards = ({ url, id }) => {
    const classes = useStyles();
    // const [categoryValue, setCategoryValue] = useState('');
    console.log(id)
        return (
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia image={`${url}`}
                    className={classes.media} />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="h5">
                       
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <CategoryDropdown id={id}/>
                {/* <Button size="small" color="primary" onClick={changeCategory}>
                    this needs to be a dropdown
                </Button> */}

            </CardActions>
        </Card>
        );
}

export default connect()(FavoritesCards);

