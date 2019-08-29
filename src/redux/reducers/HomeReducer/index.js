import {
    FETCHING_HOME_LAYOUT,
    FETCH_HOME_LAYOUT_SUCCESS,
    FETCH_HOME_LAYOUT_FAIL
} from '../../actions/actionTypes';



const INITIAL_STATE = {
    layouts : [],
    categories : [],
    isFetching : false
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case FETCHING_HOME_LAYOUT:
            return { ...state, isFetching : true };
        case FETCH_HOME_LAYOUT_SUCCESS:
            return {
                ...state,
                isFetching : false,
                layouts : action.payload.layouts,
                categories : action.payload.categories
            };
        case FETCH_HOME_LAYOUT_FAIL :
            return { ...state , isFetching : false };
        default:
            return state;
    }
}