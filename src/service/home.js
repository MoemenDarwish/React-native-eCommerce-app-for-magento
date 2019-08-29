
import {request} from './api';

export const fetchHome =async () => {
    return await request({ target: 'home/test'})
}