
import I18n from 'react-native-i18n';
import { I18nManager } from 'react-native';
import en from './locales/en';
import ar from './locales/ar';
import tr from './locales/ar'

I18n.fallbacks = true;
I18n.translations = { en, ar };
//const currentLocale  = I18n.currentLocale().substr(0, 2);
// const isRTL = currentLocale == 'ar' ;
// I18nManager.allowRTL(isRTL);
// I18nManager.forceRTL(isRTL);


export default I18n;