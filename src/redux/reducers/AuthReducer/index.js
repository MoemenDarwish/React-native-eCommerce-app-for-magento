import {
    AUTH_FAIL,
    AUTH_FETCHING,
    AUTH_SUCCESS,
    UPDATE_USER_DATA,
    FORGET_SUCCESS,
    LOGOUT_SUCCESS
    
} from '../../actions/actionTypes';


const INITIAL_STATE = {
    loading: false,
    user: null
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_FETCHING:
            return { ...state, loading: true };
        case UPDATE_USER_DATA:
            return { ...state, user: action.payload };
        // case AUTH_SUCCESS:
        //     return { ...state, user: action.payload, loading: false };
        case AUTH_FAIL:
            return { ...state, loading: false };
    
        case FORGET_SUCCESS:
            return {...state,loading:false}

        case LOGOUT_SUCCESS:
            return { ...state, loading : false, user : null }
        default:
            return state;
    }
}