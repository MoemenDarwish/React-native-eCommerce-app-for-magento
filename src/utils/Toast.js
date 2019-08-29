import store from '../redux/store';
import { toastAction } from '../redux/actions';

const dispatch = store.store.dispatch;
export const toast = (message,config={type : null, duration:2000})=>{

    toastAction(dispatch,message,config)
}