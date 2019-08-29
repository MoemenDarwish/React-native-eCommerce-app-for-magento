import {
    ORDERES_FETCHING_SUCCESS,
    ORDERES_DETAILS_SUCCESS

} from '../../actions/actionTypes'

const INITIAL_STATE = {
    orders: [],
    orderDetails: []

}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ORDERES_FETCHING_SUCCESS:
            return {
                ...state,
                orders: action.payload
            }
        case ORDERES_DETAILS_SUCCESS:
            return {
                ...state,
                orderDetails: action.payload
            }

        default:
            return state;
    }
}
