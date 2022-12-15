import { itemsActions } from "../config/constants";
import axios from "axios";


export const addItemAction = async(dispatch, item) => {
    dispatch({
        type: itemsActions.ADD_ITEM_REQUEST
    })
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_LINK}/items`, item)
        dispatch({
            type: itemsActions.ADD_ITEM_SUCCESS,
            payload: {
                item: response.data
            }
        })
    }
    catch (error) {
        dispatch({
            type: itemsActions.ADD_ITEM_FAILURE,
            payload: {
                error: error
            }
        })
    }
}

export const getItemAction = async(dispatch) => {
    dispatch({
        type: itemsActions.GET_ITEMS_REQUEST
    })
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/items`)
        dispatch({
            type: itemsActions.GET_ITEMS_SUCCESS,
            payload: {
                items: response.data
            }
        })
    }
    catch (error) {
        dispatch({
            type: itemsActions.GET_ITEMS_FAILURE,
            payload: {
                error: error
            }
        })
    }
}

export const updateItemAction = async(dispatch, item, id) => {
    dispatch({
        type: itemsActions.UPDATE_ITEM_REQUEST
    })
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_LINK}/items/${id}`, item)
        dispatch({
            type: itemsActions.UPDATE_ITEM_SUCCESS,
            payload: {
                item: response.data
            }
        })
        console.log(response.data)
    }
    catch (error) {
        dispatch({
            type: itemsActions.UPDATE_ITEM_FAILURE,
            payload: {
                error: error
            }
        })
    }
}
