import { listLayouts } from '../../../config/layout';
import {
    CHANGE_CATEGORY_LAYOUT,
    INIT_CATEGORY_SCREEN,
    FETCH_CATEGORY_PRODUCTS_SUCCESS,
    FETCH_CATEGORY_PRODUCTS_FAIL,
    TOGGLE_SORTING_MODAL,
    FETCH_ATTRIBUTES_SUCCESS,
    LOAD_MORE_PRODUCTS,
    FETCH_MORE_PRODUCTS_SUCCESS,
    FETCH_MORE_PRODUCTS_FAIL,
    REFRESH_PRODUCTS,
    APPLY_CATEGORY_FILTER,
    RESET_CATEGORY_SUCCESS,
    ON_SORT_CATEGORY,
} from '../../actions/actionTypes';

const INITIAL_STATE = {
    refresh: false,
    loadMore: false,
    products: [],
    filter_attributes: [],
    selected_options: [],
    total_count: 0,
    layout: listLayouts.list,
    page: 1,
    sortingModal: false,
    sort: 'position',

}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_CATEGORY_SCREEN:
            return INITIAL_STATE;
        case APPLY_CATEGORY_FILTER:
            return { ...state, selected_options: action.payload, page : 1 };
        case REFRESH_PRODUCTS:
            return { ...state, refresh: true, page : 1};
        case ON_SORT_CATEGORY:
            return {...state, sort : action.payload, page:1};
        case FETCH_CATEGORY_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                filter_attributes: action.payload.filtering_Atrributes,
                total_count: action.payload.total_count,
                page:1,
                loadMore: false,
                refresh: false,
            };
        case LOAD_MORE_PRODUCTS:
            return { ...state, loadMore: true }
        case FETCH_MORE_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: [...state.products, ...action.payload.products],
                filter_attributes: action.payload.filtering_Atrributes,
                total_count: action.payload.total_count,
                page: state.page + 1,
                loadMore: false,
                refresh: false,
                sortingModal: false
            };
        case FETCH_MORE_PRODUCTS_FAIL:
            return { ...state, loadMore: false, refresh: false }
        case FETCH_CATEGORY_PRODUCTS_FAIL:
            return { ...state, loadMore: false, refresh: false }
        case CHANGE_CATEGORY_LAYOUT:
            return { ...state, layout: action.layout };
        case TOGGLE_SORTING_MODAL:
            return { ...state, sortingModal: !state.sortingModal };
        case RESET_CATEGORY_SUCCESS:
            return {
                ...state,
                selected_options: [],
                page: 1,
            }
        default:
            return state;
    }
}