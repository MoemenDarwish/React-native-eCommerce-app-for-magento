import { INCREASE_ITEM, DECREASE_ITEM } from '../../actions/actionTypes'

const INITIAL_STATE = {
  count: 66
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case INCREASE_ITEM:
    return {
      ...state,
      count:state.count+1
    }
    case DECREASE_ITEM:
    return{
      ...state,
      count:state.count-1
    }
    default:
    return state
  }
}
