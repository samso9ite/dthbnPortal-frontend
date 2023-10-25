import api from "./api";
import axios from "axios";

const AuthenticationAPI = {
    login:async (formData:{}) => {
        try{
            const response = axios.post('http://127.0.0.1:8000/api/token/', formData)
            return response
        }catch{
            throw new Error("Email or password isn't correct")
        }
    }
}

export default AuthenticationAPI