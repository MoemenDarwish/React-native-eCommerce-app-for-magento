import { SHOW_TOAST, HIDE_TOAST } from "../../actions/actionTypes";



const INITIAL_STATE = {
    toaster : {
        message:'',
        config:{
            duration : 1000,
            type : '',
            style : {}
        }
    }
}



export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case SHOW_TOAST:
            return {...state, toaster : action.payload}
        case HIDE_TOAST:
            return INITIAL_STATE;
        default:
            return state
    }
}


