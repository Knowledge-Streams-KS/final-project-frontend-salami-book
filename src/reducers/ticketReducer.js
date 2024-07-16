import {
    FETCH_MATCHES_REQUEST,
    FETCH_MATCHES_SUCCESS,
    FETCH_MATCHES_FAILURE,
    SELECT_MATCH,
    SELECT_TICKET_CATEGORY,
    ADD_TO_CART,
} from '../actions/ticketActionsTypes.js';

const initialState = {
    matches: [],
    selectedMatch: null,
    selectedTicketCategory: null,
    cart: [],
    loading: false,
    error: null,
};

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MATCHES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_MATCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                matches: action.payload,
            };
        case FETCH_MATCHES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case SELECT_MATCH:
            return {
                ...state,
                selectedMatch: action.payload,
                selectedTicketCategory: null, // Reset ticket category on match change
            };
        case SELECT_TICKET_CATEGORY:
            return {
                ...state,
                selectedTicketCategory: action.payload,
            };
        case ADD_TO_CART:
            const { matchId, categoryId } = action.payload;
            const selectedMatch = state.matches.find((match) => match.id === matchId);
            const selectedCategory = selectedMatch.ticketCategories.find(
                (category) => category.id === categoryId
            );
            return {
                ...state,
                cart: [...state.cart, { match: selectedMatch, category: selectedCategory }],
            };
        default:
            return state;
    }
};

export default ticketReducer;
