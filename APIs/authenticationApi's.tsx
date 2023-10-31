import api from "./api";
import axios from "axios";
import { FormValues } from "@/UI/genericForm"


const generalRequest = async (url:string, formData:FormValues, method: 'post' | 'get' | 'put' | 'delete') => {
    try{
        const response = await api.axios_instance[method](api.baseUrl+url, formData)
        return response
    }catch{
        throw new Error("Email or password isn't correct")
    }
}
const AuthenticationAPI = {
    login: (formData:FormValues) => generalRequest('token/', formData, 'post'),
    signUp: (formData:FormValues) => generalRequest('auth/sign_up', formData, 'post')
}


export default AuthenticationAPI