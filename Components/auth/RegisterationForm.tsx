import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

const RegisterForm = () => {
    let programmes = [{name:'Dental Therapist', value:'DTH'}, {name:'Dental Surgery Technician', value:'DST'}, {name:'Dental Surgeon', value:'DS'}, {name:'Dental Nurses', value:"DN"}]
    const [selectedProgramme, setProgrammes] = useState(null)

    return(
        <>
            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                School Sign Up
            </h2>
            <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">Enter your details below.</div>
            <div className="intro-x mt-8">
            <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="School Code" />
            <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="School Name" />
            <input type="email" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Email" />
            <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Phone Number" />
            
            <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password" />
            <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Confirm Password" />
            <Multiselect className='mt-4'
                options={programmes} 
                selectedValues={selectedProgramme} 
                displayValue="name" 
            />
            </div>

        </>
    )
}

export default RegisterForm