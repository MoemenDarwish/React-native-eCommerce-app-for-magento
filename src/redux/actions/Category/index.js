import {
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING,
    CHANGE_CATEGORY_LAYOUT,
    INIT_CATEGORY_SCREEN,
    FETCH_CATEGORY_PRODUCTS_SUCCESS,
    LOAD_MORE_PRODUCTS,
    FETCH_MORE_PRODUCTS_SUCCESS,
    FETCH_MORE_PRODUCTS_FAIL,
    FETCH_ATTRIBUTES_SUCCESS,
    TOGGLE_SORTING_MODAL,
    REFRESH_PRODUCTS,
    FETCH_CATEGORY_PRODUCTS_FAIL,
    APPLY_CATEGORY_FILTER,
    RESET_CATEGORY_SUCCESS,
    ON_SORT_CATEGORY
} from '../actionTypes';
import { listProducts } from '../../../service';

export const init_category_screen = () => {
    return ({ type: INIT_CATEGORY_SCREEN });
}

export const fetchCategory = ({ id, sort, refreshing, filtering_attributes }) => {
    return async (dispatch) => {
        if (refreshing) {
            dispatch({ type: REFRESH_PRODUCTS, selected_options: filtering_attributes });
        } else {
            dispatch({ type: START_OVERLAY_LOADING });
        }
        const response = await listProducts({ category_id: id, filtering_attributes, sort })
        if (response.status) {
            dispatch({ type: FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING })
        } else {
            dispatch({ type: FETCH_CATEGORY_PRODUCTS_FAIL })
            dispatch({ type: STOP_OVERLAY_LOADING })
        }
    }
}


export const loadMore_products = ({ id, page, filtering_attributes, sort }) => {
    return async (dispatch) => {
        dispatch({ type: LOAD_MORE_PRODUCTS });
        const response = await listProducts({ category_id: id, page: page + 1, filtering_attributes, sort })
        if (response.status) {
            await dispatch({ type: FETCH_MORE_PRODUCTS_SUCCESS, payload: response.result });
        } else {
            dispatch({ type: FETCH_MORE_PRODUCTS_FAIL })
        }
    }
}


export const applyFilter = ({ id, filtering_attributes, sort }) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        dispatch({ type: APPLY_CATEGORY_FILTER, payload: filtering_attributes });
        const response = await listProducts({ category_id: id, filtering_attributes, sort })
        if (response.status) {
            dispatch({ type: FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING })
        } else {
            dispatch({ type: FETCH_CATEGORY_PRODUCTS_FAIL })
            dispatch({ type: STOP_OVERLAY_LOADING })
        }
    }
}


export const reset_filter = ({ category_id }, navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await listProducts({ category_id, filtering_attributes: [] });
        if (response.status) {
            dispatch({ type: RESET_CATEGORY_SUCCESS });
            dispatch({ type: FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING });
            navigation.goBack();
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING })
        }

    }
}

export const on_sort = ({ category_id, sort, filtering_attributes }) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await listProducts({ category_id, filtering_attributes, sort });
        if (response.status) {
            dispatch({ type: ON_SORT_CATEGORY, payload: sort });
            dispatch({ type: FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: response.result });
            dispatch({ type: STOP_OVERLAY_LOADING });
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING })
        }

    }

}


export const toggleSortingModal = () => {
    return { type: TOGGLE_SORTING_MODAL };
}

export const changeLayout = (layout) => {
    return (dispatch) => {
        dispatch({ type: CHANGE_CATEGORY_LAYOUT, layout });
    }
}