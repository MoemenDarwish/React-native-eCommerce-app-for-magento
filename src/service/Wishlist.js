import { request } from './api';




export const listWishlist =async ({ customer_id }) => {
    return await request({ target: 'wishlist/list', body: {customer_id} });
}


export const addToWishlist =async ({ customer_id, product_id  }) => {
    return await request({ target: 'wishlist/add', body: { customer_id, product_id  } });
}


export const removeFromWishlist =async ({ customer_id,product_id }) => {
    return await request({ target: 'wishlist/remove', body: { customer_id, product_id  } });
}


export const emptyWishlist =async ({ customer_id }) => {
    return await request({ target: 'wishlist/empty', body: {customer_id} });
}