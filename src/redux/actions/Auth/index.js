import {
    LOGOUT_SUCCESS,
    START_OVERLAY_LOADING,
    UPDATE_USER_DATA,
    STOP_OVERLAY_LOADING,
} from '../actionTypes';
import I18n from "../../../i18n";
import { AsyncStorage } from 'react-native';
import { KEYS } from '../../../common/localStorageKeys';
import { register, sociallogin, forgetPassword, resetPassword, getProfile, updateProfile, sync_local, mailLogin } from '../../../service';
import { toast } from '../../../utils/Toast';
import { navigateToMain } from '../../../navigation/Navigator';
import { Alert } from "react-native"

export const loginWithEmail = (data, navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await mailLogin(data);
        if (response.status) {
            onLoginSuccess({ dispatch, navigation, user: response.result, data })
        } else {
            onLoginFail({ dispatch, message: response.result })
        }
    }
}


export const registerWithEmail = (data, navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await register(data);
        if (response.status) {
            onLoginSuccess({ dispatch, navigation, user: response.result, data })
        } else {
            onLoginFail({ dispatch, message: response.result })
        }
    }
}

export const socialLogin = (data, navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await sociallogin(data);
        if (response.status) {
            onLoginSuccess({ dispatch, navigation, user: response.result, data })
        } else {
            onLoginFail({ dispatch, message: response.result })
        }
    }
}



export const get_profile = (customer_id) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await getProfile(customer_id);
        if (response.status) {
            const user = response.result;
            AsyncStorage.setItem(KEYS.USER_DATA, JSON.stringify(user))
                .then(() => {
                    dispatch({ type: UPDATE_USER_DATA, payload: user });
                    dispatch({ type: STOP_OVERLAY_LOADING });
                });
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
        }
    }

}


export const update_profile = ({ firstname, lastname, email, id }) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await updateProfile({ firstname, lastname, email, customer_id: id });
        if (response.status) {
            const user = response.result;
            AsyncStorage.setItem(KEYS.USER_DATA, JSON.stringify(user))
                .then(() => {
                    dispatch({ type: UPDATE_USER_DATA, payload: user });
                    dispatch({ type: STOP_OVERLAY_LOADING });
                });
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
        }
    }

}




export const forget_password = (email,navigation) => {
    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await forgetPassword(email);
        dispatch({ type: STOP_OVERLAY_LOADING });

        setTimeout(() => {
            Alert.alert('',
                response.status ? I18n.t("checkYourMail") : response.result,
                [
                    { text: I18n.t("ok"), onPress: () => navigation.goBack() },
                ],
                { cancelable: false },
            );
        }, 10);

    }
}

export const reset_password = ({ oldPass, newPass, confirmPass, email }) => {

    return async (dispatch) => {
        dispatch({ type: START_OVERLAY_LOADING });
        const response = await resetPassword({ password: oldPass, newPassword: newPass, confirmPassword: confirmPass, email })
        if (response.status) {
            dispatch({ type: STOP_OVERLAY_LOADING });
            toast(response.result)
        } else {
            dispatch({ type: STOP_OVERLAY_LOADING });
            toast(response.result)
        }
    }
}

export const logout = (navigation) => {
    return async (dispatch) => {
        navigation.closeDrawer();
        dispatch({ type: START_OVERLAY_LOADING })
        await AsyncStorage.removeItem(KEYS.USER_DATA)
            .then(() => {
                navigateToMain(navigation)
                dispatch({ type: LOGOUT_SUCCESS });
                dispatch({ type: STOP_OVERLAY_LOADING });

            })
    }
}


const onLoginSuccess = async ({ dispatch, user, navigation, data }) => {
    const { wishlist_ids, cart_ids } = data;
    const { id } = user;
    const response = await sync_local({ cart_ids, wishlist_ids, customer_id: id });
    if (response.status) {
        AsyncStorage.setItem(KEYS.USER_DATA, JSON.stringify(user))
            .then(() => {
                dispatch({ type: UPDATE_USER_DATA, payload: { ...user, ...response.result } });
                dispatch({ type: STOP_OVERLAY_LOADING });
                navigateToMain(navigation)
                toast(`${I18n.t('welcome')} ${user.displayname}`)
            });
    } else {
        dispatch({ type: STOP_OVERLAY_LOADING });
    }
}

const onLoginFail = ({ dispatch, message }) => {
    dispatch({ type: STOP_OVERLAY_LOADING })
    toast(message);
}


