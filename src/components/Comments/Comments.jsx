import { Grid, Button,makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState ,useMain, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { API} from '../../helpers/constants';
import { useAuth } from '../../contexts/AuthContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import CommentsCard from './CommentsCard';
import  { useProduct } from '../../contexts/ProductsContext';
const useStyles = makeStyles((theme) => ({
    commentWindow: {
        width: 600,
        height: 300,
        border: 'solid 2px black',
        padding: 10,
        overflow: 'scroll'
    },
    root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    input: {
        width: 550
    }
}))
const Comments = () => {
    const classes = useStyles()
    const {currentUser} = useAuth()
    const { getProducts,productDetail,history, getDetail } = useProduct()
    const [value, setValue] = useState('')
    const {id} = useParams()
    const [product, setProduct] = useState('')
    const [comment, setComment] = useState('')
    const handleInp = (e) => {
        let coment = {
            comment: e.target.value,    
            user: currentUser.email
        }
        setComment (coment)
        setValue(e.target.value)
        console.log(comment)
    }

    useEffect(()=> {
        getDetail(id)
    },[])
    const addComment = async(history) => {
        productDetail.comments.push(comment)
        setProduct(productDetail)
        console.log(product)
        const data = await axios.patch(`${API}/products/${id}`,product)
        // getProducts(history)
        setValue('')
    }
        
    // const dar = new Date(date,hours)
    // console.log(dar)
    return (
        <>
       
        <Grid container justify="center">
            <Grid className={classes.commentWindow}>
            {productDetail.comments ? (productDetail.comments.map((item) => (
                <CommentsCard item={item}/>
            ))
            ) : (
                <div className={classes.root}>
                <CircularProgress color="secondary" />
              </div>
            )}
            </Grid>
            <TextField value={value}className={classes.input} onChange={handleInp}/>
            <Button onClick={() => addComment()} style={{color:"pink"}} >Send</Button>
        </Grid>
          
        </>
    );
};

export default Comments;