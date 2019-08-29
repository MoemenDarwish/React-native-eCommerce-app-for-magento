import {
    PRODUCT_FETCHING,
    PRODUCT_FETCHING_SUCCESS,
    PRODUCT_FETCHING_FAIL,
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING,
} from '../../actions/actionTypes';


const INITIAL_STATE = {
    product : {},
    isFetching : true
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case PRODUCT_FETCHING:
            return { ...state, isFetching : true,product:{}  };
        case PRODUCT_FETCHING_SUCCESS :
            return { ...state, product : action.payload, isFetching:false };
        case PRODUCT_FETCHING_FAIL:
            return { ...state , isFetching : false }
        default :
            return state;
    }
}