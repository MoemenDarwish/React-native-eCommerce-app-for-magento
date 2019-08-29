import {FETCH_CONFIG_FINISHED} from '../../actions/actionTypes';



const INITIAL_STATE = {
    loading: true
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_CONFIG_FINISHED:
            return { ...state , loading : false };
        default:
            return state;
    }
}