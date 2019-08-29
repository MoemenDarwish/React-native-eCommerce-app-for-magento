import {UPDATE_INTERNET_STATUS} from '../../actions/actionTypes';



const INITIAL_STATE = {
    isConnected : true
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UPDATE_INTERNET_STATUS:
            return {...state, isConnected : action.isConnected};
        default :
            return state;
    }
}