import { UPDATE_INTERNET_STATUS } from '../actionTypes';


export const updateInternetStatus = (isConnected)=>{
    return{ type : UPDATE_INTERNET_STATUS, isConnected  }
}