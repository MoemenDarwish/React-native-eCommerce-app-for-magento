import {
    START_OVERLAY_LOADING,
    ORDERES_FETCHING_SUCCESS,
    ORDERES_FETCHING_FAIL,
    STOP_OVERLAY_LOADING,
    ORDERES_DETAILS_SUCCESS,
    ORDERES_DETAILS_FAIL,
    ORDERES_CANCEL_SUCCESS,
    ORDERES_CANCEL_FAIL
} from "../actionTypes";
import { orderlist, orderDetails } from "../../../service";
import { toast } from '../../../utils/Toast';
import I18n from '../../../i18n'

export const order_list = (customer_id) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING })
        const response = await orderlist({ customer_id })
        console.log(response)
        if (response.status) {
            dispatch({ type: STOP_OVERLAY_LOADING })
            dispatch({ type: ORDERES_FETCHING_SUCCESS, payload: response.result })
        } else {
            dispatch({ type: ORDERES_FETCHING_FAIL })
            dispatch({ type: STOP_OVERLAY_LOADING })
        }
    }
}


export const order_details = (order_id) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING })
        const response = await orderDetails({ order_id })
        console.log(response)
        if (response.status) {
            dispatch({ type: STOP_OVERLAY_LOADING })
            dispatch({ type: ORDERES_DETAILS_SUCCESS, payload: response.result })
        } else {
            dispatch({ type: ORDERES_DETAILS_FAIL })
            dispatch({ type: STOP_OVERLAY_LOADING })
        }
    }
}

export const cancel_order = (order_id) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING })
        const response = await orderDetails({ order_id })
        if (response.status) {
            dispatch({ type: STOP_OVERLAY_LOADING })
            dispatch({ type: ORDERES_CANCEL_SUCCESS, payload: response.result })
            toast(I18n.t("orderCancelSuccess"),{type:'success'})
        } else {
            dispatch({ type: ORDERES_CANCEL_FAIL })
            dispatch({ type: STOP_OVERLAY_LOADING })
            toast(I18n.t("orderCancelSuccess"),{type:'error'})

        }
    }
}