import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import ticketReducer from './reducers/ticketReducer.js';

const rootReducer = combineReducers({
    tickets: ticketReducer, // Use 'tickets' as the key, assuming this matches your state structure
    // Add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
