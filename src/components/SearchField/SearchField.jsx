import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import { useForm } from "react-hook-form";
import '../SearchField/SearchField.css';

const SearchField = (props) => {
    const { handleSubmit, reset, register } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        props.getGifs(data);
        reset();
    }

    return (
        <FormControl >
            <form className={"container"} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" >
                <TextField label="search" name="search" className={'input'}
                    inputRef={register} size="small"
                />
                <Button type="submit" size="small" style={{ marginTop: "1.25em" }}> Submit</Button>
            </form>
        </FormControl>
    );
}

export default connect()(SearchField);




