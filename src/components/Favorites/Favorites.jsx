import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import { calcTotalPrice } from '../../helpers/calcPrice';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    table: {
        // minWidth: 700,
    },
    paper: {
        // maxWidth: 1000,
        width: '100vw',
        minWidth:'400px',
        margin: '40px auto',
        marginTop:'120px',
    },
    title: {
        backgroundColor: 'rgb(241 , 196 , 208)'
    }
});

const Favorites = () => {
    const classes = useStyles()
    const { favorites, getFavorites } = useContext(productContext)

    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <TableContainer component={Paper} className={classes.paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow className={classes.title}>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {favorites.products ? (
                        <>
                            {favorites.products.map((elem) => (
                                <TableRow key={elem.item.id}>
                                    <TableCell><img style={{ width: "50px" }} src={elem.item.image} alt={elem.item.title} /></TableCell>
                                    <TableCell align="right">{elem.item.title}</TableCell>
                                    <TableCell align="right">{elem.item.price}</TableCell>

                                </TableRow>
                            ))}
                        </>
                    ) : (<h1>Loading...</h1>)}

                    <TableRow>
                        
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default Favorites;