import AuthenticationAPI from "@/APIs/authenticationApi's";
import { Fields } from "@/Components/Forms/Forms";
import { useCustomMutation } from "@/Hooks/apiCall";
import GenericForm, {FormValues} from "@/UI/genericForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import ApiStateHandler from "@/util/ApiStateHandler";
import { useEffect, useState } from "react";

const ResetPassword:React.FC = () => {
    const [showStatus, setShowStatus] = useState<boolean>(false)

    const router = useRouter()
    
    const onSuccess = () => {
        router.push('/auth') 
    }
    const {uid, token} = router.query 
    
    const apiStatusHandler = (statusData:boolean) => {
        setShowStatus(statusData)
    }

    const {handleSubmit, isSuccess, isError, isPending, error, data} = 
    useCustomMutation(AuthenticationAPI.accountActivation, onSuccess)
    useEffect(() => {
        let formData = {
            uidb:uid,
            token:token
        } 
        handleSubmit(formData)
    }, [uid, token])
    
    
    return(
        <>
            {showStatus && ApiStateHandler(isPending, isError, error, apiStatusHandler)}
            <ToastContainer />
        </>
    )
}

export default ResetPassword