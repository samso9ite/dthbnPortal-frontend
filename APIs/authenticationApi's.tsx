import api from "./api";
import { FormValues } from "@/UI/genericForm"

const generalRequest = async (url:string, formData:FormValues, method: 'post' | 'get' | 'put' | 'delete') => {
    try{
        const response = await api.axios_instance[method](api.baseUrl+url, formData)
        return response
    }catch(error:any){
        if(error.response & error.response.data){
            throw new Error(error.response.data.error)
        }else{
            throw new Error("An error occured while making the request")
        }
        
    }
}
const AuthenticationAPI = {
    login: (formData:FormValues) => generalRequest('token/', formData, 'post'),
    signUp: (formData:FormValues) => generalRequest('auth/sign_up', formData, 'post'),
    forgotPwd: (formData:FormValues) => generalRequest('auth/forgot-password', formData, 'post'),
    resetPwd: (formData:FormValues, uid:string, token:string) => generalRequest(`auth/reset-password/${uid}/${token}`, formData, 'post')
}


export default AuthenticationAPI