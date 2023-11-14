import api from "./api";
import { FormValues } from "@/UI/genericForm"

const generalRequest = async (url:string, method: 'post' | 'put' | 'patch' | 'get', formData?:FormValues) => {
    
    try{
        if(method == 'get'){
            const response = await api.axios_instance[method](api.baseUrl+url)
            return response
        }else{
            const response = await api.axios_instance[method](api.baseUrl+url, formData)
            return response
        }
          
    }catch(error:any){
        if(error.response && error.response.data){
            let data = error.response.data
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const value = data[key];
                    throw new Error(` ${key} : ${value}`)
                }
            } 
        }else{
            throw new Error("An error occured while making the request")
        }
        
    }
};

 const apiRequest = {
    login: (formData:FormValues) => generalRequest('token/', 'post', formData),
    signUp: (formData:FormValues) => generalRequest('auth/sign_up', 'post', formData),
    forgotPwd: (formData:FormValues) => generalRequest('auth/forgot-password', 'post', formData),
    resetPwd: (formData:FormValues, uid:string, token:string) => generalRequest(`auth/reset-password/${uid}/${token}`, 'post', formData),
    accountActivation: (formData:FormValues) => generalRequest('auth/activate', 'post', formData),

    // School Portal API's 
    dashboard:() => generalRequest('school/dashboard', 'get'),
    indexingList: () => generalRequest('school/indexed_record/2023-2024', 'get'),
    createIndexing: (formData:FormValues) => generalRequest('school/new_indexing/', 'post', formData)
}



export default apiRequest