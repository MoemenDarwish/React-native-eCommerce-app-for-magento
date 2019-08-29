import { START_OVERLAY_LOADING, STOP_OVERLAY_LOADING } from "../../actions/actionTypes";



const INITIAL_STATE = {
    overlay_loading : false
}


export default (state=INITIAL_STATE , action)=>{
    switch(action.type){
        case START_OVERLAY_LOADING:
            return {...state , overlay_loading : true };
        case STOP_OVERLAY_LOADING:
            return { ...state , overlay_loading : false };
        default:
            return state;
    }
}