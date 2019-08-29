import {
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING,
    CART_FETCHING_SUCCESS,
    CART_CHECKOUT_URL,
    ADD_TO_LOCAL_CART,
    DELETE_FROM_LOCAL_CART,
    INC_LOCAL_CART,
    DEC_LOCAL_CART,
    EMPTY_LOCAL_CART,
    CHANGE_CHECKOUT_TITLE,
    CREATE_ORDER_SUCCESS,

} from '../actionTypes';
import { toast } from '../../../utils/Toast';
import { listCart, addToCart, removeFromCart, deleteFromCart, emptyCart, checkout } from '../../../service/Cart';
import { navigateToCart, navigateToCheckout } from '../../../navigation/Navigator';
import I18n from '../../../i18n'
import { NavigationActions, StackActions } from 'react-navigation';
import { base_url } from '../../../Configuration';


export const list_cart = ({ customer_id, refreshing }) => {
    return async (dispatch) => {
        if (!refreshing) {
            dispatch({ type: START_OVERLAY_LOADING });
        }
        const response = await listCart({ customer_id });
        if (response.status) {
            dispatch({ type: STOP_OVERLAY_LOADING });
            dispatch({ type: CART_FETCHING_SUCCESS, payload: response.result });

        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
        }

    }
}


export const add_to_cart = ({ customer_id, product_id }) => {
    return async (dispatch) => {
        const response = await addToCart({ customer_id, product_id });
        if (response.status) {
            dispatch({ type: CART_FETCHING_SUCCESS, payload: response.result });
            toast(I18n.t("addToCartSuccess"), { type: 'success' })
        } else {
            toast(I18n.t("addToCartSuccess"), { type: 'error' })

        }

    }
}

export const buy_now = ({ customer_id, product_id }, navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await addToCart({ customer_id, product_id });
        if (response.status) {
            dispatch({ type: CART_FETCHING_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING });
            navigateToCart(navigation)
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING })
        }

    }
}



export const remove_from_cart = ({ customer_id, product_id }) => {
    return async (dispatch) => {
        const response = await removeFromCart({ customer_id, product_id });
        if (response.status) {
            dispatch({ type: CART_FETCHING_SUCCESS, payload: response.result });
            toast(I18n.t("removeFomCartSuccess"), { type: 'success' })
        } else {
            toast(I18n.t("removeFomCartSuccess"), { type: 'error' })

        }

    }
}


export const empty_cart = ({ customer_id }) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await emptyCart({ customer_id });
        if (response.status) {
            dispatch({ type: CART_FETCHING_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING });
            toast(I18n.t("cartEmptySuccess"), { type: 'success' })

        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
            toast(I18n.t("cartEmptySuccess"), { type: 'error' })

        }

    }
}



export const delete_from_cart = ({ customer_id, product_id }) => {
    return async (dispatch) => {
        const response = await deleteFromCart({ customer_id, product_id });
        if (response.status) {
            dispatch({ type: CART_FETCHING_SUCCESS, payload: response.result });
            toast(I18n.t("removeFomCartSuccess"), { type: 'success' })

        } else {
            toast(I18n.t("removeFomCartSuccess"), { type: 'error' })

        }

    }
}


export const on_press_checkout = ({ customer_id }, navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });

        let response = await checkout({ customer_id });
        if (response.status) {
            await dispatch({ type: CART_CHECKOUT_URL, payload: `${base_url}/api/${response.result}` });
            await dispatch({ type: STOP_OVERLAY_LOADING });
            await navigateToCheckout(navigation);

        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
            toast(response.result, { type: 'error' })
        }

    }
}


export const cancel_checkout = ({ customer_id }, navigation) => {
    return async (dispatch) => {
        await navigateToCart(navigation);
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await listCart({ customer_id });
        if (response.status) {
            await dispatch({ type: CART_FETCHING_SUCCESS, payload: response.result });
            await dispatch({ type: STOP_OVERLAY_LOADING });
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
        }

    }
}



export const handle_local_cart = ({ product = null, cart_items = [], action, navigation = null }) => {
    return (dispatch) => {
        const exist = cart_items.findIndex(item => item.product.id == product.id);
        let current_qty = (exist !== -1) ? cart_items[exist].qty : 0;

        if (action === "add") {
            dispatch({ type: ADD_TO_LOCAL_CART, payload: { product, qty: current_qty + 1 } })
            toast(I18n.t("addToCartSuccess"), { type: 'success' })

        } else if (action === "buyNow") {
            if (exist !== -1) {
                cart_items[exist] = { product, qty: current_qty + 1 };
                dispatch({ type: INC_LOCAL_CART, payload: cart_items })
            } else {
                dispatch({ type: ADD_TO_LOCAL_CART, payload: { product, qty: current_qty + 1 } })
            }
            navigateToCart(navigation);
        }
        else if (action === 'increase') {
            cart_items[exist] = { product, qty: current_qty + 1 };
            dispatch({ type: INC_LOCAL_CART, payload: cart_items })
        } else if (action == 'decrease') {
            cart_items[exist] = { product, qty: current_qty - 1 };
            dispatch({ type: DEC_LOCAL_CART, payload: cart_items })
        } else if (action === 'delete') {
            dispatch({
                type: DELETE_FROM_LOCAL_CART,
                payload: { product_id: product.id, qty: current_qty }
            });
            toast(I18n.t("removeFomCartSuccess"), { type: 'success' })

        } else if (action === "empty") {
            dispatch({ type: EMPTY_LOCAL_CART });
            toast(I18n.t("cartEmptySuccess"), { type: 'success' })

        }

    }
}






export const order_finish = (message, navigation) => {
    return async (dispatch) => {
        if (message) {
            let data = JSON.parse(message.data);
            if (data.status === 'success') {
                dispatch({ type: CREATE_ORDER_SUCCESS });
                const resetAction = StackActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({ routeName: 'HomeScreen' }),
                        NavigationActions.navigate({ routeName: 'OrderScreen' }),
                    ],
                });
                navigation.dispatch(resetAction);
            } else if (data.status === 'continue') {
                dispatch({ type: CREATE_ORDER_SUCCESS });
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'HomeScreen' })
                    ],
                });
                navigation.dispatch(resetAction);
            }
        }
    }

}