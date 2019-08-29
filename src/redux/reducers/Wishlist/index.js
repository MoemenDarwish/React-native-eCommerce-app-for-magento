import {
    WISHLIST_FETCHING,
    WISHLIST_FETCHING_SUCCESS,
    WISHLIST_FETCHING_FAIL,
    UPDATE_USER_DATA,
    ADD_TO_LOCAL_WISHLIST,
    REMOVE_FROM_LOCAL_WISHLIST,
    EMPTY_LOCAL_WISHLIST
} from '../../actions/actionTypes';


const INIIIAL_STATE = {
    wishlist: [],
    isFetching: false,
    count : 0,
    wishlist_ids:[]
}

export default (state = INIIIAL_STATE, action) => {
    switch (action.type) {

        case UPDATE_USER_DATA:
            return {
                ...state,
                count: action.payload.wishlist_items_count,
                wishlist_ids : action.payload.wishlist_products_Ids
            }
        case WISHLIST_FETCHING_SUCCESS:
            return { 
                ...state,
                wishlist:action.payload.items,
                count : action.payload.items_count,
                wishlist_ids : action.payload.products_ids,
                isFetching: false
            };
        case WISHLIST_FETCHING_FAIL:
            return { ...state, isFetching: false };
        case ADD_TO_LOCAL_WISHLIST:
            return{
                ...state,
                wishlist : [...state.wishlist, action.payload],
                wishlist_ids : [...state.wishlist_ids, action.payload.id],
                count : state.count+1
            };
        case REMOVE_FROM_LOCAL_WISHLIST:
            return{
                ...state,
                wishlist : state.wishlist.filter(item=>item.id != action.payload.id),
                wishlist_ids : state.wishlist_ids.filter( id => id != action.payload.id),
                count : state.count -1
            }
        case EMPTY_LOCAL_WISHLIST:
            return INIIIAL_STATE;
        default:
            return state;
    }
}