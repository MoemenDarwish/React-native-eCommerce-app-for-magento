import I18n from '../i18n';
import { toast } from '../utils/Toast';
import { base_url, token } from '../Configuration';



// raya_token = "raya20203030";
// raya_url = "http://www.rayashop.com";




const get_stored_data = ()=>{
    const store_code =  I18n.currentLocale().substr(0, 2) ;
    return { token ,store_code}
}


export const request = async ({ target, body = {}}) => {
    const url = `${base_url}/api/${target}`;
    const stored_data = get_stored_data();
    const form_data = createFormData({...stored_data, ...body});


    try {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
              },
            body: form_data
        });
        
        return await result.json()

    } catch (error) {
        console.log(error);
        toast("ERROR IN CONNECTION");
        return { status : false, result : "ERROR IN CONNECTION" }
    }
}




const createFormData = (data)=>{
    let form_data = new FormData();
    for( let key in data ){
        form_data.append(key, data[key]);
    }

    return  form_data;
}