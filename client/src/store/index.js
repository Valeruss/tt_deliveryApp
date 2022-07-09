import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
