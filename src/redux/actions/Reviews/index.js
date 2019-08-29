import { 
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING,
    REVIEWS_FETCHING,
    REVIEWS_FETCHING_SUCCESS,
    ADD_REVIEW_SUCCESS,
    REVIEWS_FETCHING_FAIL
} from "../actionTypes";

import { reviewOptions, addReview } from "../../../service/Product";
import { toast } from "../../../utils/Toast";
import I18n from '../../../i18n'

export const fetchReviewOptions = ()=>{
    return async (dispatch)=>{
        dispatch({ type : START_OVERLAY_LOADING });
        const response = await reviewOptions();
        console.log(response)
        if(response.status){
            dispatch({type : REVIEWS_FETCHING_SUCCESS , payload : response.result});
            dispatch({ type : STOP_OVERLAY_LOADING });
        }else{
            dispatch({ type : STOP_OVERLAY_LOADING });
        }
    }
}


export const addNewReview = (navigation,reviewData)=>{
    return async (dispatch)=>{
        dispatch({ type : START_OVERLAY_LOADING });
        const response = await addReview({...reviewData});
        if(response.status){
            dispatch({type : ADD_REVIEW_SUCCESS});
            dispatch({ type : STOP_OVERLAY_LOADING });
            toast(response.result)
            navigation.navigate('ProductScreen');
            toast(I18n.t("reviewAddedSuccess"),{type:'success'})
        }else{
            dispatch({ type : STOP_OVERLAY_LOADING });
            toast(I18n.t("reviewAddedSuccess"),{type:'error'})


        }
    }
}