import {
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING,
    ADD_TO_LOCAL_WISHLIST,
    REMOVE_FROM_LOCAL_WISHLIST,
    EMPTY_LOCAL_WISHLIST,
    WISHLIST_FETCHING_SUCCESS,
} from '../actionTypes';
import I18n from '../../../i18n'
import { toast } from '../../../utils/Toast';
import { listWishlist, addToWishlist, removeFromWishlist, emptyWishlist } from '../../../service/Wishlist';

export const list_wishlist = (customer_id, refreshing) => {
    return async (dispatch) => {
        if (!refreshing) {
            dispatch({ type: START_OVERLAY_LOADING })
        }
        const response = await listWishlist({ customer_id })
        if (response.status) {
            dispatch({ type: WISHLIST_FETCHING_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING });
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
        }

    }
}


//TODO 
export const add_to_wishlist = ({ customer_id, product_id }) => {
    return async (dispatch) => {
        const response = await addToWishlist({ customer_id, product_id });
        if (response.status) {
            dispatch({ type: WISHLIST_FETCHING_SUCCESS, payload: response.result });
            toast(I18n.t("addToWishlistSuccess"), { type: 'success' })

        } else {
            toast(I18n.t("addToWishlistSuccess"), { type: 'error' })

        }

    }
}



export const remove_from_wishlist = ({ customer_id, product_id }) => {
    return async (dispatch) => {
        const response = await removeFromWishlist({ customer_id, product_id })
        if (response.status) {
            dispatch({ type: WISHLIST_FETCHING_SUCCESS, payload: response.result });
            toast(I18n.t("removeFormWishlist"), { type: 'success' })
        } else {
            toast(I18n.t("removeFormWishlist"), { type: 'error' })

        }
    }
}

export const empty_wishlist = (customer_id) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await emptyWishlist({ customer_id })
        if (response.status) {
            dispatch({ type: WISHLIST_FETCHING_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING });
            toast(I18n.t("emptyWishlistSucess"), { type: 'success' })

        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
            toast(I18n.t("emptyWishlistSucess"), { type: 'error' })

        }
    }
}




export const handle_local_wishlist = ({ product = null, action }) => {
    return (dispatch) => {
        if (action === "add") {
            dispatch({ type: ADD_TO_LOCAL_WISHLIST, payload: product });
            toast(I18n.t("addToWishlistSuccess"), { type: 'success' })
        } else if (action === 'remove') {
            dispatch({ type: REMOVE_FROM_LOCAL_WISHLIST, payload: product });
            toast(I18n.t("removeFormWishlist"), { type: 'success' })
        } else if (action === "empty") {
            dispatch({ type: EMPTY_LOCAL_WISHLIST });
            toast(I18n.t("emptyWishlistSucess"), { type: 'success' })

        }

    }
}