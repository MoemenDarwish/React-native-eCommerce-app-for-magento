import {
    SEARCH_CHANGE_TEXT,
    RESET_SEARCH,
    SEARCH_FETCHING_SUCCESS,
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING
} from '../actionTypes';
import { search } from '../../../service';



export const changeSearchText = (searchText)=>{
    return { type : SEARCH_CHANGE_TEXT, payload : searchText  };
}

export const resetSearch = ()=>{
    return { type : RESET_SEARCH }
}



export const onSearch = (searchText, navigation)=>{
    return async (dispatch)=>{
        dispatch({ type : START_OVERLAY_LOADING });
        const response = await search({ key : searchText });
        if(response.status){
            dispatch({ type : SEARCH_FETCHING_SUCCESS, payload : response.result });
            dispatch({ type : STOP_OVERLAY_LOADING });
        }else{
            dispatch({ type : STOP_OVERLAY_LOADING });
        }

    }
}