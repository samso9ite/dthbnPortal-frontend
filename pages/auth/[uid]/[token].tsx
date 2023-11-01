import AuthenticationAPI from "@/APIs/authenticationApi's";
import { Fields } from "@/Components/Forms/Forms";
import { useCustomMutation } from "@/Hooks/apiCall";
import GenericForm, {FormValues} from "@/UI/genericForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import ApiStateHandler from "@/util/ApiStateHandler";
import { useState } from "react";

const ResetPassword:React.FC = () => {
    const [showStatus, setShowStatus] = useState<boolean>(false)
    const onSuccess = () => {

    }
    const apiStatusHandler = (statusData:boolean) => {
        setShowStatus(statusData)
    }
    const router = useRouter()
    const {uid, token} = router.query 
    
    const resetPwdWithTokenAndUid = (formData: FormValues) => {
        return AuthenticationAPI.resetPwd(formData, uid, token);
    };
    const {handleSubmit, isSuccess, isError, isPending, error} = useCustomMutation(resetPwdWithTokenAndUid, onSuccess)

    const submitHandler = (formData:FormValues) => {
        if (!!formData.confirm_password && !!formData.new_password ){
            if(formData.confirm_password === formData.new_password){
                handleSubmit(formData)
                apiStatusHandler(true)
            }else(
                 toast.error('Password Mismatch', {
                     position: "top-right",
                     autoClose: 5000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     theme: "light",
                 }
                 )
             )
         }
    }
    
    return(
            <div className="container sm:px-10 login">
                <div className="block xl:grid grid-cols-2 gap-4">
                    <div className="hidden xl:flex flex-col min-h-screen">
                        <div className="my-auto">
                            <img alt="Dental Board of Nigeria" className="-intro-x w-2/2 -mt-16" src={process.env.NEXT_PUBLIC_URL+'dist/images/dental_logo.png'} />
                            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                Dental Therapist 
                                <br />
                                Registeration Board <br /> of Nigeria
                            </div>
                            <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Login to your account with just few clicks.</div>
                        </div>
                    </div>
                    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                        <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            Reset Password
                            </h2>

                            <GenericForm fields={Fields.resetPwdFields} onSubmit={submitHandler} />
                        </div>
                    </div>
                </div>
                {showStatus && ApiStateHandler(isPending, isError, error, isSuccess, apiStatusHandler)}
                <ToastContainer />
            </div>
    )
}

export default ResetPassword