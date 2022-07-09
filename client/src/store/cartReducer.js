const defaultState = {
    products: []
};

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const CHANGE_COUNT = "CHANGE_COUNT";

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products: [ ...state.products, action.payload ] };
        case REMOVE_PRODUCT:
            return { ...state, products: state.products.filter(product => product._id !== action.payload._id) };
        case CHANGE_COUNT:
            const index = state.products.findIndex((value) => value._id === action.payload._id);
            return { ...state, product: state.products[index] === action.payload }
        default:
            return state;
    }
}

export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });
export const removeProductAction = (payload) => ({ type: REMOVE_PRODUCT, payload });
export const changeCountAction = (payload) => ({ type: CHANGE_COUNT, payload });
