import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const CategoryDropdown = (props) => {
    const classes = useStyles();
    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        console.log(event.target.value);
        dispatchCategory(event.target.value)
    };

 
    const dispatchCategory = (category) => {
        let id = props.id
        let dispatchObject = { category, id }
        console.log(dispatchObject)
        props.dispatch({ type: 'SET_CATEGORY', payload: dispatchObject})
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="categories label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Funny</MenuItem>
                    <MenuItem value={2}>Cute</MenuItem>
                    <MenuItem value={3}>NSFW</MenuItem>
                    <MenuItem value={4}>meme</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

// const mapPropsToState = (reduxState) => {
//     return {
//         categories: reduxState.categories
// }

export default connect()(CategoryDropdown);
