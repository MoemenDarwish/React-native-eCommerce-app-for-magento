import { request } from './api'
import { country_code } from '../Configuration';


export const listAddress = async ({ customer_id }) => {
    return await request({ target: 'address/list', body: { customer_id } })
}

export const deleteAddress = async ({ customer_id, address_id }) => {
    body = { customer_id, address_id }
    return await request({ target: 'address/delete', body })
}

export const listRegions = async () => {
    return await request({
        target: 'address/regions', body: {
            country_code
        }
    })
}


export const addAddress = async ({ customer_id, firstname, lastname, phone, country, region, region_id, city_id, city, street, postcode }) => {
    body = {
        customer_id,
        firstname,
        lastname,
        telephone: phone,
        country,
        region,
        city,
        region_id,
        city_id,
        street,
        postcode
    }
    return await request({ target: 'address/add', body })
}


export const updateAddress = async ({ customer_id, address_id, firstname, lastname, phone, country, region, region_id, city_id, city, street, postcode }) => {
    body = {
        customer_id,
        address_id,
        firstname,
        lastname,
        telephone: phone,
        country,
        region,
        city,
        region_id,
        city_id,
        street,
        postcode
    }
    return await request({ target: 'address/update', body })
}

