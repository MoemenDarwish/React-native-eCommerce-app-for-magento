import {
    ADDRESSES_FETCHING,
    ADDRESSES_FETCHING_SUCCESS,
    ADDRESSES_FETCHING_FAIL,
    ADDRESSES_REMOVE_ADDRESS,
    REGIONS_FETCHING_SUCCESS

} from '../../actions/actionTypes'

const INITIAL_STATE = {
    addresses: [],
    regions : [],
    isFetching: false,

}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDRESSES_FETCHING:
            return { ...state, isFetching: true };
        case ADDRESSES_FETCHING_SUCCESS:
            return { ...state, isFetching: false, addresses: action.payload }
        case REGIONS_FETCHING_SUCCESS:
        return { ...state, isFetching: false, regions: action.payload }
        case ADDRESSES_FETCHING_FAIL:
            return { ...state, isFetching: false };
        case ADDRESSES_REMOVE_ADDRESS:
            return{
                ...state,
                addresses : state.addresses.filter( address=> address.id !== action.payload  ),
                isFetching:false
            }
        default:
            return state;
    }
}