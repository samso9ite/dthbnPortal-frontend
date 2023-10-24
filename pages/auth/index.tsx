import ForgotPasswordForm from "@/Components/auth/FogotPwdForm"
import LoginForm from "@/Components/auth/LoginForm"
import ProfRegisterForm from "@/Components/auth/ProfRegisterationForm"
import RegisterForm from "@/Components/auth/RegisterationForm"
import {useState} from 'react'

const Authentication:React.FC = () => {
    const [formState, setFormState] = useState('login')
    const [formValue, setFormValue] = useState({})

    const setForm = (newFormState:{}) => {
        setFormValue(newFormState)
        console.log(formValue);
        
    }

    // Sending authentication request

    

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
                    { formState =='login' ?
                        <LoginForm onFormChange={setForm}/>    : 
                    formState == 'school'?
                        <RegisterForm /> :
                    formState == 'professional'?
                        <ProfRegisterForm /> :
                        <ForgotPasswordForm />
                    }
                    <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                        <a  onClick={() => {setFormState('forgotPassword')}}>Forgot Password?</a> 
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" onClick={() => {setFormState('login')}}>Login</button>
                        <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top" onClick={() => {setFormState('school')}}>School Signup</button>
                        <button className="btn btn-outline-secondary py-3  w-fullxl:w-32 ml-3 align-top" onClick={() => {setFormState('professional')}}>Professional Signup</button>
                    </div>
                    <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left"> By signin up, you agree to our <a className="text-primary dark:text-slate-200" href="">Terms and Conditions</a> & <a className="text-primary dark:text-slate-200" href="">Privacy Policy</a> </div>
            
                </div>
                </div>
            </div>
        </div>
    )
}
export default Authentication