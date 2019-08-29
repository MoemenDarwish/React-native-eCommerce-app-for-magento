import { request } from './api'

export const orderlist = async ({ customer_id }) => {
    return await request({ target: 'order/list', body: { customer_id } })
}


export const orderDetails = async ({ order_id }) => {
    return await request({ target: 'order/get', body: { order_id } })
}