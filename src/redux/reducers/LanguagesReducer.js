
import {APPLY_LANGUAGE} from '../actions/actionTypes';






export default (state=null, action)=>{
    switch(action.type){
        case APPLY_LANGUAGE:
            return action.lang;
        default :
            return state;
    }

}

