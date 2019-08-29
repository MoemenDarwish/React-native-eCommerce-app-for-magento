import {
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING,
    PRODUCT_FETCHING,
    PRODUCT_FETCHING_SUCCESS,
    PRODUCT_FETCHING_FAIL
} from '../actionTypes';
import { fetchProduct } from '../../../service';
import { toast } from '../../../utils/Toast';


export const fetchProductDetails = ({id})=>{
    return async(dispatch)=>{
        dispatch({ type : PRODUCT_FETCHING });
        dispatch({ type : START_OVERLAY_LOADING });
        const response =await fetchProduct({product_id : id});
        if(response.status){
            dispatch({ type : PRODUCT_FETCHING_SUCCESS, payload : response.result });
            dispatch({ type : STOP_OVERLAY_LOADING });
           // toast(response.result)
        }else{
            dispatch({ type : STOP_OVERLAY_LOADING });
           //toast(response.result)
        }

    }
}


