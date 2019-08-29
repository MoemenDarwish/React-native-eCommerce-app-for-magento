import I18n from '../i18n';
import _ from 'lodash';
import {isEmail, isLength} from "validator";

export const isEmpty = (data) => {
    const formData = _.map(data);
    let notEmptyForm = formData.every(value => {
        return  value && value.length > 0
    });
    return !notEmptyForm;
}



const isPassword = (password) => {
    return password.length >= 6;
}



export const authValidation = ({email , password})=>{
    if(!isEmail(email)){
        return {valid : false,  error : { email : I18n.t('invalidMail') }}
    }else if(!isLength(password,{min : 6})){
        return {valid : false, error : {password : I18n.t('invalidPassword') } }
    }else{
        return { valid : true }
    }
}

export const register = ({email , password})=>{
    if(!isEmail(email)){
        return {valid : false,  error : { email : I18n.t('invalidMail') }}
    }else if(!isLength(password,{min : 6})){
        return {valid : false, error : {password : I18n.t('invalidPassword') } }
    }else{
        return { valid : true }
    }
}


// export const authValidation = (data) => {
//     const { email, password } = data;
//     if (isEmpty(data)) {
//         return { status: 'invalid', msg: I18n.t('pleaseEnterData') }
//     } else if (!isEmail(email)) {
//         return { status: 'invalid', msg: I18n.t('invalidMail') }
//     } else if (!isPassword(password)) {
//         return { status: 'invalid', msg: I18n.t('invalidPassword') }
//     } else {
//         return { status: 'valid' }
//     }
// }


export const addReviewValidation = ({ name, review, rates, title, reviewOptions }) => {
    const valid = (!isEmpty({ name, review, title }) && (rates.length == reviewOptions.length))
    if (!valid) {
        return { status: 'invalid', msg: I18n.t('pleaseEnterData') }
    } else {
        return { status: 'valid' }
    }
}

export const forgetValidation = (email) => {
    if (email.trim().length == 0) {
        return { status: 'invalid', msg: I18n.t('emptyEmail') }

    }
    else if (!isEmail(email)) {
        return { status: 'invalid', msg: I18n.t('invalidMail') }

    }
    else {
        return { status: 'valid' }
    }
}


export const resetValidation = ({oldPass, newPass,confirmPass}) => {

    if (oldPass.trim().length == 0 || newPass.trim().length == 0 || confirmPass.trim().length == 0)   {
        return { status: 'invalid', msg: I18n.t('pleaseEnterData') }
    }
    else if (!isPassword(oldPass) || !isPassword(newPass) || !isPassword(confirmPass)) {
        return { status: 'invalid', msg: I18n.t('invalidPassword') }
    }else if (newPass != confirmPass){
    return { status :'invalid',msg:I18n.t('passwordNotMatch')}
    } 
    
    else {
        return { status: 'valid' }
    }
}


export const addressValidation = (data)=>{
    if(isEmpty(data)){
        return { status : 'invalid' , msg: I18n.t('pleaseEnterData')  };
    }else if( (data.phone.trim().length < 11) || ( isNaN( Number(data.phone)))   ){
        return { status : 'invalid' , msg: I18n.t('invalidPhone')  };
    }else{
        return { status: 'valid' }
    }
}