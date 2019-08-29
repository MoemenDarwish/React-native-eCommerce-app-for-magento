import {
    CART_FETCHING,
    CART_FETCHING_SUCCESS,
    CART_FETCHING_FAIL,
    UPDATE_USER_DATA,
    CART_REMOVE_ITEM,
    ADD_TO_LOCAL_CART,
    CART_CHECKOUT_URL,
    DELETE_FROM_LOCAL_CART,
    INC_LOCAL_CART,
    DEC_LOCAL_CART,
    EMPTY_LOCAL_CART,
    CHANGE_CHECKOUT_TITLE,
    CREATE_ORDER_SUCCESS
} from '../../actions/actionTypes'

const INITIAL_STATE = {
    cart_items: [],
    cart_ids : [],
    isFetching: false,
    count: 0,
    subTotal : 0,
    checkout_url: null,
    title : "",
    canGoBack : false
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_LOCAL_CART:
            return {
                ...state,
                cart_items: [...state.cart_items, action.payload],
                cart_ids : [...state.cart_ids, action.payload.product.id],
                count: state.count + 1
            }
        case INC_LOCAL_CART:
            return {
                ...state,
                cart_items: [...action.payload],
                count: state.count + 1
            }
        case DEC_LOCAL_CART:
            return {
                ...state,
                cart_items: [...action.payload],
                count: state.count - 1
            }
        case DELETE_FROM_LOCAL_CART:
            return {
                ...state,
                cart_items: state.cart_items.filter(item => item.product.id !== action.payload.product_id),
                cart_ids: state.cart_ids.filter(id => id !== action.payload.product_id),
                count: state.count - action.payload.qty
            }
        case UPDATE_USER_DATA:
            return {
                ...state,
                count: action.payload.cart_items_count,
                cart_ids : action.payload.cart_products_Ids

            }
        case CART_FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cart_items: action.payload.items,
                cart_ids : action.payload.products_ids,
                count: action.payload.items_count,
            }
        case CART_CHECKOUT_URL:
            return { ...state, checkout_url: action.payload }
        case CART_FETCHING_FAIL:
            return { ...state, isFetching: false };
        case CHANGE_CHECKOUT_TITLE:
            return {...state, title : action.payload.title, canGoBack : action.payload.canGoBack};
        case CART_REMOVE_ITEM:
            return {
                ...state, isFetching: false,
                cart_items: state.cart_items.filter(item => item.id !== action.payload),
                count: action.payload.length
            };
        case CREATE_ORDER_SUCCESS:
        case EMPTY_LOCAL_CART:
            return INITIAL_STATE;
        default:
            return state;
    }
}
