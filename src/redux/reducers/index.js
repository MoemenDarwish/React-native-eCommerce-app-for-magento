import { combineReducers } from 'redux';
import {AsyncStorage} from 'react-native';
import LanguagesReducer from './LanguagesReducer';
import CategoryReducer from './CategoryReducer';
import InternetReducer from './InternetReducer';
import AuthReducer from './AuthReducer';
import ConfigReducer from './ConfigReducer';
import HomeReducer from './HomeReducer';
import ProductReducer from './ProductReducer';
import WishlistReducer from './Wishlist';
import CartReducer from './Cart';
import SearchReducer from './Search';
import AddressesReducer from './Address';
import ToastReducer from './Toast';
import ReviewsReducer from './Reviews';
import LoadingReducer from './Loading';
import OrderReducer from './Order'
import { LOGOUT_SUCCESS } from '../actions/actionTypes';
const appReducer  =  combineReducers({
    lang: LanguagesReducer,
    auth: AuthReducer,
    category: CategoryReducer,
    netInfo: InternetReducer,
    config: ConfigReducer,
    home: HomeReducer,
    product: ProductReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
    search: SearchReducer,
    addresses: AddressesReducer,
    toast: ToastReducer,
    reviews: ReviewsReducer,
    loading: LoadingReducer,
    order: OrderReducer
});



const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        Object.keys(state).forEach(key => {
            AsyncStorage.removeItem(`persist:${key}`);
        });
        state = { loading : {...state.loading}, lang : {...state.lang}, home : {...state.home}};

      }
    return appReducer(state, action)
  }

  export default rootReducer;
