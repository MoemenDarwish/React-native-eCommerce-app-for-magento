import {
    START_OVERLAY_LOADING,
    ADDRESSES_FETCHING_SUCCESS,
    STOP_OVERLAY_LOADING,
    REGIONS_FETCHING_SUCCESS
} from '../actionTypes';
import { listAddress, deleteAddress, updateAddress, addAddress, listRegions } from '../../../service';
import { toast } from '../../../utils/Toast';
import { navigateToAddress } from '../../../navigation/Navigator';
import I18n from '../../../i18n'
export const fetchAddresses = (customer_id, refreshing) => {
    return async (dispatch) => {
        if (!refreshing) {
            dispatch({ type: START_OVERLAY_LOADING });
        }
        const response = await listAddress({ customer_id })
        if (response.status) {
            dispatch({ type: ADDRESSES_FETCHING_SUCCESS, payload: response.result })
            dispatch({ type: STOP_OVERLAY_LOADING })

        } else {
            dispatch({ type: START_OVERLAY_LOADING })
        }
    }
}


export const list_regions = () => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await listRegions();
        if (response.status) {
            dispatch({ type: REGIONS_FETCHING_SUCCESS, payload: response.result })
            dispatch({ type: STOP_OVERLAY_LOADING })

        } else {
            dispatch({ type: START_OVERLAY_LOADING })
        }
    }
}

export const removeAddress = ({ address_id, customer_id }) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await deleteAddress({ customer_id, address_id });
        if (response.status) {
            dispatch({ type: ADDRESSES_FETCHING_SUCCESS, payload: response.result })
            dispatch({ type: STOP_OVERLAY_LOADING })
            toast(I18n.t("addressRemovedSuccess"), { type: 'success' })
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING })
            toast(I18n.t("addressRemovedSuccess"), { type: 'error' })

        }

    }
}

export const add_address = (address, navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await addAddress(address);
        console.log(response);
        if (response.status) {

            dispatch({ type: ADDRESSES_FETCHING_SUCCESS, payload: response.result })
            dispatch({ type: STOP_OVERLAY_LOADING })
            navigateToAddress(navigation)
            toast(I18n.t("addressAddedSuccess"), { type: 'success' })


        } else {
            dispatch({ type: STOP_OVERLAY_LOADING })
            toast(response.result, { type: 'error' })

        }

    }
}


export const update_address = (address, navigation) => {

    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await updateAddress(address);
        if (response.status) {
            dispatch({ type: ADDRESSES_FETCHING_SUCCESS, payload: response.result })
            dispatch({ type: STOP_OVERLAY_LOADING })
            navigateToAddress(navigation)
            toast(I18n.t("addressUpdatedSuccess"), { type: 'success' })

        } else {
                    dispatch({ type: STOP_OVERLAY_LOADING })
                    toast(response.result, { type: 'error' })

        }

    }
}
