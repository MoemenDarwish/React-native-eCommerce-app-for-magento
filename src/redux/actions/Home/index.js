import {
    START_OVERLAY_LOADING,
    STOP_OVERLAY_LOADING,
    FETCHING_HOME_LAYOUT,
    FETCH_HOME_LAYOUT_SUCCESS,
    FETCH_HOME_LAYOUT_FAIL
} from '../actionTypes';
import { listCategories } from '../../../service/Category';
import { fetchHome } from '../../../service/home';



export const fetchHomeLayout = () => {
    return async (dispatch) => {
       dispatch({ type: START_OVERLAY_LOADING });
        const response = await listCategories();
        if (response.status) {
            const home = await fetchHome();
            if (home.status) {
                dispatch({ type: STOP_OVERLAY_LOADING })
                dispatch({
                    type: FETCH_HOME_LAYOUT_SUCCESS,
                    payload: { categories: response.result, layouts : home.result }
                });
            }else{
                dispatch({ type: STOP_OVERLAY_LOADING })
            }

        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });

        }


    }
}


