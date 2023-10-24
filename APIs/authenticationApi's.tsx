import api from "./api";

export const AuthenticationAPI = {
    login:async (params:type) => {
        try{
            const response = api.axios_instance.post(api.baseUrl+'')
            return response
        }catch{
            throw new Error("Email or password isn't correct")
        }
    }
}