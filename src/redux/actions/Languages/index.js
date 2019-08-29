import {  I18nManager } from 'react-native';
import I18n from '../../../i18n';
import RNRestart from 'react-native-restart';
import {
    CHANGE_LANGUAGE,
    APPLY_LANGUAGE
} from '../actionTypes';

export const changeLanguage = (lang) => {
    return async (dispatch) => {
        if (lang == 'ar') {
            I18n.locale = 'ar';
            dispatch({ type: CHANGE_LANGUAGE, payload: { lang: 'ar', rtl: true } });
        } else {
            I18n.locale = 'en';
            dispatch({ type: CHANGE_LANGUAGE, payload: { lang: 'en', rtl: false } });

        }
    }
}

export const applyLanguage = (lang) => {
    return (dispatch) => {
        I18nManager.forceRTL(lang == 'ar');
        dispatch({ type: APPLY_LANGUAGE, lang });
        setTimeout(() => {
            I18n.locale = lang;
            RNRestart.Restart()

        }, 10);
    }
}