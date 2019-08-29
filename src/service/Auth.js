
import { request } from './api';




export const register = async ({ firstname, lastname, email, password, cart_ids = [], wishlist_ids=[] }) => {
    const body = { firstname, lastname, email, password, cart_ids:JSON.stringify(cart_ids), wishlist_ids : JSON.stringify(wishlist_ids) }

    return await request({ target: 'customer/register', body });
}

export const mailLogin = async ({ email, password,cart_ids = [], wishlist_ids=[] }) => {
    const body = { email, password , cart_ids:JSON.stringify(cart_ids), wishlist_ids : JSON.stringify(wishlist_ids)  }
    return await request({ target: 'customer/login', body });
}


export const sociallogin = async ({ firstname, lastname, email, avatar,cart_ids = [], wishlist_ids=[]  }) => {
    const body = { firstname, lastname, email, avatar,cart_ids:JSON.stringify(cart_ids), wishlist_ids : JSON.stringify(wishlist_ids) };
    console.log(JSON.stringify)
    return await request({ target: 'customer/sociallogin', body });
}


export const getProfile =async (customer_id) => {
    return await request({ target: 'account/get', body: {customer_id} });
}


export const updateProfile =async ({firstname, lastname, email, customer_id }) => {
    const body = {firstname, lastname, email, customer_id }
    return await request({ target: 'account/update', body });
}

export const forgetPassword = async (email) => {
    return await request({ target: 'account/forget', body: {email} })
}

export const resetPassword = async ({ password, newPassword, confirmPassword, email }) => {
    const body =  { password,new_password : newPassword, confirm_password : confirmPassword, email }
    return await request({ target: 'account/reset', body })
}



export const sync_local = async({cart_ids, wishlist_ids, customer_id})=>{
    const body = { customer_id , cart_ids:JSON.stringify(cart_ids), wishlist_ids : JSON.stringify(wishlist_ids)  }
    return await request({target : 'customer/sync', body});

}