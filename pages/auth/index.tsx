import  AuthenticationAPI  from "@/APIs/authenticationApi's"
import ForgotPasswordForm from "@/Components/auth/FogotPwdForm"
import LoginForm from "@/Components/auth/LoginForm"
import ProfRegisterForm from "@/Components/auth/ProfRegisterationForm"
import RegisterForm from "@/Components/auth/RegisterationForm"
import  {useCustomMutation} from "@/Hooks/apiCall"
import {useEffect, useState} from 'react'
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiStateHandler from "@/util/ApiStateHandler"
import GenericForm, {Field, FormValues} from "@/UI/genericForm"
import { Fields } from "@/Components/Forms/Forms"

const Authentication: React.FC = () => {
    const [formState, setFormState] = useState('login')
    const [formData, setformData] = useState<any>({})
    const [showStatus, setShowStatus] = useState<boolean>(false)

    const setForm = (newFormState:{}) => {
        setformData(newFormState)
    }
    const router = useRouter()

    const onSuccess = () => {   
        router.push('/school')
    }

    const apiStatusHandler = (statusData:boolean) => {
        setShowStatus(statusData)
    }
   
    const {handleSubmit, isError, isPending, error, isSuccess} = useCustomMutation(AuthenticationAPI.login, onSuccess)

    // Sending authentication request
    const submitHandler = () => {
       handleSubmit(formData)
       apiStatusHandler(true)
    }
    const handleFormSubmit = (values:FormValues) => {
        console.log('Form data:', values);
    };
    
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
                   {formState == 'login' ? 'Sign in' : formState == 'school' ? 'School Sign up' : 'Professional Sign Up'}
                </h2>
                   {   
                        formState =='login' ?
                        <GenericForm fields={Fields.loginFormFields}
                            initialValues={{email:'', password: ''}}
                            onSubmit={handleFormSubmit}
                        />
                       : 
                        formState == 'school' ?
                        <GenericForm fields={Fields.schoolFormFields}
                            initialValues={{schCode:'', schName:'', password:'', confirmPwd:'', email:'', phone:''}}
                            onSubmit={handleFormSubmit}
                        />
                        :
                        formState == 'professional' ?
                        <GenericForm fields={Fields.professionalFormFields} 
                            initialValues={{regCode:'', email:'', programme:'Dental Therapist', password:'', confirmPwd:'',}} 
                            onSubmit={handleFormSubmit}
                        /> :
                        <ForgotPasswordForm />
                    }
                    <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                        <a onClick={() => {setFormState('forgotPassword')}}>Forgot Password?</a> 
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                    <p>{showStatus}</p>
                        <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" onClick={submitHandler} disabled={isPending}>{isPending ? 'Authenticating' : 'Login'} {isPending}</button>
                        <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top" onClick={() => {setFormState('school')}}>School Signup</button>
                        <button className="btn btn-outline-secondary py-3  w-fullxl:w-32 ml-3 align-top" onClick={() => {setFormState('professional')}}>Professional Signup</button>
                    </div>
                    <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left"> 
                        By signing up, you agree to our <a className="text-primary dark:text-slate-200" href="">Terms and Conditions</a> & 
                    <a className="text-primary dark:text-slate-200" href="">Privacy Policy</a> </div>
                </div>
                
                    {showStatus && ApiStateHandler(isPending, isError, error, isSuccess, apiStatusHandler)}
                
                </div>
            </div>
            <ToastContainer 
            
            /> 

        </div>
       
    )
}
export default Authentication