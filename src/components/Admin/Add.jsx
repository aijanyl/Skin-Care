import { Button, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        }
    }
}))

const Add = () => {
    const classes = useStyles()
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: '',
        comments: []
    })

    const { addProduct } = useContext(productContext)

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if (!values.image) values.image = "https://images.pexels.com/photos/5632327/pexels-photo-5632327.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632327.jpg&fm=jpg"
        addProduct(values)
        history.push('/')
    }

    return (
        <Paper elevation={3} className={classes.paper} style={{marginTop:'100px'}}>
            <h1 style={{ textAlign: 'center', color:'pink' }}>Add product</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', color: 'pink'}}>
                <div>
                    <img style={{ width: '400px' }} src={values.image ? values.image : "https://images.pexels.com/photos/5632359/pexels-photo-5632359.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632359.jpg&fm=jpg"} alt="jewellery image" />
                </div>

                <div
                    style={{
                        width: '450px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                    <form className={classes.root} noValidate autoComplete='off'>
                        <TextField name='title' onChange={handleInp} value={values.title} variant='outlined' label='Title' />
                        <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image' />
                        <TextField name='type' onChange={handleInp} value={values.type} variant='outlined' label='Type' />
                        <TextField name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price' />
                        <TextField name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description' />
                    </form>
                    <Link to={'/list'}>
                    <IconButton aria-label='share' onClick={handleSave}>
                        <Button variant="contained" color="white">Add</Button>
                    </IconButton></Link>
                </div>
            </div>
        </Paper>
    );
};

export default Add;