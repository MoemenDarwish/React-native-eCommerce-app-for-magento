import {
    SEARCH_CHANGE_TEXT,
    SEARCH_FETCHING,
    SEARCH_FETCHING_SUCCESS,
    SEARCH_FETCHING_FAIL,
    RESET_SEARCH
} from '../../actions/actionTypes';

const INITIAL_STATE = {
    searchText:'',
    isFetching : false,
    search_result : []
}



export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case SEARCH_CHANGE_TEXT:
            return { ...state, searchText : action.payload };
        case SEARCH_FETCHING:
            return { ...state, isFetching:true };
        case SEARCH_FETCHING_SUCCESS:
            return{ ...state, search_result : action.payload, isFetching:false };
        case SEARCH_FETCHING_FAIL:
            return{...state, isFetching : false};
        case RESET_SEARCH:
            return { ...state, search_result : [] }
        default :
            return state;
    }
}

