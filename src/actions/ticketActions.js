import axiosInstance from '../axios/axios.js'; // adjust based on your setup
import {
    FETCH_MATCHES_REQUEST,
    FETCH_MATCHES_SUCCESS,
    FETCH_MATCHES_FAILURE,
    SELECT_MATCH,
    SELECT_TICKET_CATEGORY,
    ADD_TO_CART,
} from './ticketActionsTypes.js';

export const fetchMatches = () => async (dispatch) => {
    dispatch({ type: FETCH_MATCHES_REQUEST });
    try {
        const response = await axiosInstance.get('/matches'); // adjust URL as per your backend API
        dispatch({ type: FETCH_MATCHES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_MATCHES_FAILURE, error: error.message });
    }
};

export const selectMatch = (matchId) => ({
    type: SELECT_MATCH,
    payload: matchId,
});

export const selectTicketCategory = (categoryId) => ({
    type: SELECT_TICKET_CATEGORY,
    payload: categoryId,
});

export const addToCart = (matchId, categoryId) => ({
    type: ADD_TO_CART,
    payload: { matchId, categoryId },
});
