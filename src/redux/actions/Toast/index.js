import { SHOW_TOAST, HIDE_TOAST } from '../actionTypes';


export const showToast = (message) => {
    return (dispatch) => {
        dispatch({ type: SHOW_TOAST, payload: message });
        setTimeout(() => {
            dispatch({ type: HIDE_TOAST });
        }, 2000)
    }

}


export const hideToast = () => {
    return { type: HIDE_TOAST }
}
export const toastAction = (dispatch, message, config) => {
    dispatch({ type: SHOW_TOAST, payload: { message, config } });
    setTimeout(() => {
        dispatch({ type: HIDE_TOAST });
    }, (config && config.duration) ? config.duration : 2500  )
}





