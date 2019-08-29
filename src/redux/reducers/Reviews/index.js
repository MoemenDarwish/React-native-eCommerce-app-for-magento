import {
    REVIEWS_FETCHING,
    REVIEWS_FETCHING_FAIL,
    REVIEWS_FETCHING_SUCCESS,
    ADD_REVIEW_SUCCESS

} from '../../actions/actionTypes';


const INITIAL_STATE = {
    reviewOptions : [],
    isFetching : true
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case REVIEWS_FETCHING:
            return { ...state, isFetching : true };
        case REVIEWS_FETCHING_SUCCESS :
            return { ...state, reviewOptions : action.payload, isFetching:false };
        case ADD_REVIEW_SUCCESS:
            return{...state, isFetching : false}
        case REVIEWS_FETCHING_FAIL:
            return { ...state , isFetching : false }
        default :
            return state;
    }
}