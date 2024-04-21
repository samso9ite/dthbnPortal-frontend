import apiRequest from "@/APIs/ApiRequests"
import { useCustomMutation } from "@/Hooks/apiCall"
import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiStateHandler from "@/util/ApiStateHandler"
import GenericForm, { FormValues } from "@/UI/genericForm"
import { Fields } from "@/Components/Forms/Forms"
// import api from "@/APIs/api";

type ServiceType = 'login' | 'signUp' | 'forgotPwd';

const Authentication: React.FC = () => {
    const [formState, setFormState] = useState('login')
    const [showStatus, setShowStatus] = useState<boolean>(false)
    const [service, setService] = useState<ServiceType>('login');
    const [message, setMessage] = useState<string>()
    const [username, setUsername] = useState<any>('')
    const [accountDetails, setAccountDetails] = useState<any>()
    const [email, setEmail] = useState<any>()

    const router = useRouter()

    const onSuccess: any = (data: any) => {
        if (formState == 'login') {
            sessionStorage.setItem('token', data.data.access),
            sessionStorage.setItem('refresh', data.data.refresh)
            const resp = apiRequest.getUserAccount(email).then(response => {
                localStorage.setItem("profile_update", response?.data.data.profile_update)
                if(response?.data.data.is_admin == true){
                    router.push('/admin')
                }else if(response?.data.data.is_school == true){
                    router.push('/school')
                }else if(response?.data.data.is_professional == true){
                    localStorage.setItem('name', response?.data.data.username)
                    localStorage.setItem('id', response?.data.data.id)
                    localStorage.setItem('email', response?.data.data.email)
                    router.push('/professional')
                }
              })
              .catch(error => {
                // Handle errors here
                console.error(error);
              });
            
            
        } else if (formState == 'professional' || formState == 'school') {
            setMessage('An activation link has been sent to your email, please check.')
        } else if (formState == 'forgotPassword') {
            setMessage("A password reset link has been sent to the email provided, please check")
        }
    }

    const apiStatusHandler = (statusData: boolean) => {
        setShowStatus(statusData)
    }

    const stateHandler = () => {
        if (formState == 'school') {
            setFormState('professional')
        } else if (formState == 'professional') {
            setFormState('login')
        } else if (formState == 'login') {
            setFormState('school');
        } else if (formState == 'forgotPassword') {
            setFormState('login')
        }
    }

    const serviceHandler = () => {
        if (formState == 'school') {
            setService('signUp');
        } else if (formState == 'professional') {
            setService('signUp')
        } else if (formState == 'login') {
            setService('login');
        } else {
            setService('forgotPwd')
        }
    }

    const { handleSubmit, isError, isPending, error, isSuccess, data } = useCustomMutation(apiRequest[service], onSuccess)

    // Sending authentication request
    const submitHandler = (formData: FormValues) => {
        if (!!formData.confirmPwd && !!formData.password) {
            if (formData.confirmPwd === formData.password) {
                serviceHandler()
                handleSubmit(formData)
                apiStatusHandler(true)
            } else (
                    toast.error('Password Mismatch', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: "light",
                    }
                )
            )
        } else {
            serviceHandler()
            handleSubmit(formData)
            apiStatusHandler(true)
            if(formState == 'login'){
                setUsername(formData.username)
                setEmail(formData.email)
            }
        }
    }

    return (
        <div className="container sm:px-10 login">
            <div className="block xl:grid grid-cols-2 gap-4">
                <div className="hidden xl:flex flex-col min-h-screen">
                    <div className="my-auto">
                        <img alt="Dental Board of Nigeria" className="-intro-x w-2/2 -mt-16" src={process.env.NEXT_PUBLIC_URL + '/dist/images/dental_logo.png'} />
                        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            Dental Therapists'
                            <br />
                            Registration Board <br /> of Nigeria
                        </div>
                        <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Login to your account with just few clicks.</div>
                    </div>
                </div>
                <center className="md:hidden"><img alt="Dental Board of Nigeria"  src={process.env.NEXT_PUBLIC_URL + '/dist/images/dental_logo.png'} /></center>
                <div className={window.innerWidth < 768 ? "xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0" : "h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0"}>
                       
                    <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent
                     px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                         
               
                        <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                            {formState == 'login' ? 'Sign in' : formState == 'school' ? 'School Sign up' :
                                formState == 'professional' ? 'Professional Sign Up' : 'Forgot Password'}
                        </h2>
                        {message &&
                            <div className="alert alert-success show mb-2 mt-4" role="alert">{message}</div>
                        }
                        {
                            formState == 'login' ?
                                <GenericForm fields={Fields.loginFormFields}
                                    onSubmit={submitHandler} isPending={isPending}
                                />
                                :
                                formState == 'school' ?
                                    <GenericForm fields={Fields.schoolFormFields}
                                        initialValues={{ is_professional: 'false' }}
                                        onSubmit={submitHandler}
                                    />
                                    :
                                    formState == 'professional' ?
                                        <GenericForm fields={Fields.professionalFormFields}
                                            initialValues={{ programme: '', is_professional: 'true' }}
                                            onSubmit={submitHandler}
                                        /> :
                                        <GenericForm fields={Fields.forgetPwdFormFields}
                                            onSubmit={submitHandler}
                                        />
                        }
                        <div className="intro-x  text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                            <a onClick={() => { setFormState('forgotPassword') }}>Forgot Password?</a>
                            <span className="float-right" style={{ cursor: 'pointer', color: '#280742', fontWeight: '600' }}
                                onClick={stateHandler}> {formState == 'school' ? 'Professional Sign Up' : formState == 'professional' ? 'Login' : formState == 'login' ? 'Signup' : 'Login'}</span>
                        </div>
                        <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <p>{showStatus}</p>
                        </div>
                        <div className="intro-x mt-10 xl:mt-10 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                            By signing up, you agree to our <a className="text-primary dark:text-slate-200" href="">Terms and Conditions</a> &
                            <a className="text-primary dark:text-slate-200" href="">Privacy Policy</a> </div>
                    </div>

                    {showStatus && ApiStateHandler(isPending, isError, error, apiStatusHandler)}
                </div>
            </div>
            <ToastContainer />

        </div>

    )
}
export default Authentication