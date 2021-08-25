import { Button, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';
import Comments from '../Comments/Comments';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    }
}))

const ProductDetail = () => {

    const { id } = useParams()
    const { productDetail, getDetail } = useContext(productContext)
    const classes = useStyles()
    const { deleteProduct, addProductInCart, checkProductInCart } = useContext(productContext)

    useEffect(() => {
        getDetail(id)
    }, [])

    return (<div className="back" marginTop="100px" >
        <Paper elevation={3} className={classes.paper} style={{marginTop:'150px'}} >
            <Typography variant='h2' style={{ color:'pink', textAlign: 'center' }}>Detail</Typography>
            {
                productDetail ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>

                            <img style={{ width: '500px' }} src={productDetail.image} alt="" />
                        </div>
                        <div style={{
                            width: '450px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                            
                        }}>
                            <Typography variant='h3' style={{color:'pink'}} gutterBottom>{productDetail.title}</Typography>
                            <Typography variant='subtitle1' style={{color:'pink'}} gutterBottom>{productDetail.type}</Typography>
                            <Typography variant='body1' gutterBottom>{productDetail.description}</Typography>
                            <Typography variant='h4' style={{color:'pink'}} gutterBottom>{productDetail.price}</Typography>
                            <Button variant="contained" style={{color:'pink'}} aria-label="share" onClick={() => addProductInCart(id)} color={checkProductInCart(id) ? "pink" : "inherit"}>Buy</Button>
                            <Rating style={{marginTop:'25px'}}/>
                            <Comments/>
                        </div>
                    </div>

                ) : (<h1>Loading...</h1>)
            }
        </Paper>
        </div>
    );
};
export default ProductDetail;