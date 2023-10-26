import {useState} from 'react'

interface FormData {
    username:string, 
    password:string
}
const LoginForm: React.FC<{onFormChange: (formData:FormData) => void}> = ({onFormChange}) => {
    const [formData, setFormData] = useState<FormData>({
        username:'',
        password: ''
    })
    
    // Get email value and save
    const emailHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        const newFormData = {...formData, username:event.target.value}
        setFormData(newFormData);
        onFormChange(newFormData)
    }
    // Get password value and save
    const passwordHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
       const newFormData = {...formData, password:event.target.value}
       setFormData(newFormData)
       onFormChange(newFormData)
    }
    

    return(
        <>
            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Sign In
            </h2>
            <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
            <div className="intro-x mt-8">
                <form>
                    <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="Email" onChange={emailHandler}/>
                    <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password" onChange={passwordHandler} />
                </form>
            </div>
        </>
    )
}

export default LoginForm