import { createStore, applyMiddleware, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import Thunk from 'redux-thunk'
import Logger from 'redux-logger'
import { AsyncStorage } from 'react-native'
import reducers from './reducers'

let composeEnhancers = compose;


if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
// MiddleWare for redux
middleware = applyMiddleware(Thunk,Logger);
/* Config for Redux Presist */

const config = {
    key : "root",
    storage : AsyncStorage,
    whitelist : ['lang', 'cart', 'wishlist', 'auth'],
}

const persistedReducer = persistReducer(config, reducers);

const store = createStore(persistedReducer,{},composeEnhancers(middleware) );

const persistor = persistStore(store);

export default { store, persistor };

// const store = createStore(reducers,{},composeEnhancers(middleware) );


// export default {store}
