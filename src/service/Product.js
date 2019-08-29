

import { request } from './api';



export const listProducts =async ({ category_id, page=1, filtering_attributes, sort='position' }) => {
    const body = {category_id , page,sort ,filtering_attributes : JSON.stringify(filtering_attributes)}
    return await request({ target: 'product/list', body });
}


export const fetchProduct =async ({ product_id }) => {
    return await request({ target: 'product/get', body : {product_id} })
}


export const addReview = async ({product_id,customer_id,name,title,review, rates})=>{
    const body = {product_id,customer_id,name,title,review, rates:JSON.stringify(rates)};
    return await request({ target : 'product/addReview', body })
}


export const reviewOptions =async ()=>{
    return await request({ target : 'product/listReviewOptions'  })
}

export const search =async ({ key, page=1 }) => {
    return await request({ target: 'product/search', body: {key, page} });
}


