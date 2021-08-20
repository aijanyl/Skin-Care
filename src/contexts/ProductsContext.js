import axios from 'axios';
import React, { useReducer, useState } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/calcPrice';
import { API } from '../helpers/constants';

export const productContext = React.createContext()

const INIT_STATE = {
    products: [],
    edit: null,
    paginatedPages: 1,
    cart: {},
    cartLength: 0,
    detail: {}
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 6)
            }
        case "GET_EDIT_PRODUCT":
            return {
                ...state, edit: action.payload
            }
        case "CHANGE_CART_COUNT":
            return {
                ...state, cartLength: action.payload
            }
        case "GET_CART":
            return {
                ...state, cart: action.payload
            }
        case "GET_DETAIL_PRODUCT":
            return {
                ...state, detail: action.payload
            }
        default: return state
    }
}

const ProductsContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const [bar, setBar]=useState    (false)

    const getProducts = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 10)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let data = await axios(`${API}/products${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const addProduct = async (newProduct) => {
        console.log(newProduct);
        try {
            let res = await axios.post(`${API}/products`, newProduct)
            return res
        } catch (err) {
            console.log(err)
            return err
        }
    }

    const editProduct = async (id) => {
        const { data } = await axios.get(`${API}/products/${id}`)
        dispatch({
            type: "GET_EDIT_PRODUCT",
            payload: data
        })
    }

    const saveEditProduct = async (updateProduct) => {
        try {
            let res = await axios.patch(`${API}/products/${updateProduct.id}`, updateProduct)
            return res
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const deleteProduct = async (id, history) => {
        await axios.delete(`${API}/products/${id}`)
        getProducts(history)
    }

    const addProductInCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }
        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if (filteredCart.length > 0) {
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        } else {
            cart.products.push(newProduct)
        }
        newProduct.subPrice = calcSubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }

    const getCartLength = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.product.length
        })
    }

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    const buy = () => {
        localStorage.clear()
    }

    const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.product.map(elem => {
            if (elem.item.id === id) {
                elem.count = count
                elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }

    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false
    }

    const getDetail = async (id) => {
        const { data } = await axios.get(`${API}/products/${id}`)
        dispatch({
            type: "GET_DETAIL_PRODUCT",
            payload: data
        })
    }

    const openSidebar=()=>{
        setBar(true)
    }


    return (
        <productContext.Provider value={{
            products: state.products,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            cart: state.cart,
            cartLength: state.cartLength,
            detail: state.detail,
            getProducts,
            addProduct,
            editProduct,
            saveEditProduct,
            deleteProduct,
            addProductInCart,
            getCartLength,
            changeProductCount,
            checkProductInCart,
            getCart,
            getDetail,
            openSidebar,
            setBar,
            bar,
            buy
        }}>
            {children}
        </productContext.Provider>
    );
};
export default ProductsContext;