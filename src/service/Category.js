
import {request} from './api';



export const listCategories =()=>{
    return request({target : 'category/tree' } );
}