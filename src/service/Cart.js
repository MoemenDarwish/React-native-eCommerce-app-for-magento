import { request } from './api';




export const listCart =async ({ customer_id }) => {
    return await request({ target: 'cart/list', body: {customer_id} });
}


export const addToCart =async ({ customer_id, product_id  }) => {
    return await request({ target: 'cart/add', body: {customer_id, product_id} });
}


export const removeFromCart =async ({ customer_id,product_id }) => {
    return await request({ target: 'cart/remove', body: { customer_id,product_id } });
}


export const deleteFromCart =async ({ customer_id,product_id }) => {
    return await request({ target: 'cart/delete', body: { customer_id,product_id } });
}


export const emptyCart =async ({ customer_id }) => {
    return await request({ target: 'cart/empty', body: {customer_id} });
}



export const checkout = async ({customer_id})=>{
    return await request({ target: 'checkout', body: {customer_id} });
}


