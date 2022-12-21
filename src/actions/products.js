import * as api from '../api';

import * as actionTypes from '../constants/index';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        dispatch({ type: actionTypes.GET_ALL_PRODUCTS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const addToCart = (itemId) => (dispatch) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { id: itemId } });
};

export const adjustQty = (itemId, value) => (dispatch) => {
    dispatch({
        type: actionTypes.ADJUST_QTY,
        payload: { id: itemId, qty: value },
    });
};

export const removeItem = (itemId) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: { id: itemId },
    });
};

export const viewItem = (item) => (dispatch) => {
    dispatch({
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    });
};
