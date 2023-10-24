import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

const ProfRegisterForm = () => {
    let programmes = [{name:'Dental Therapist', value:'DTH'}, {name:'Dental Surgery Technician', value:'DST'}, {name:'Dental Surgeon', value:'DS'}, {name:'Dental Nurses', value:"DN"}]
    const [selectedProgramme, setProgrammes] = useState(null)

    return(
        <>
        
            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Professional Sign Up
            </h2>
            <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">Enter your details below.</div>
            <div className="intro-x mt-8">
            <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="Registeration Code" />
            <input type="email" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Email" />
            <select className="form-select form-select-lg sm:mt-2 sm:mr-2" aria-label=".form-select-lg example">
                <option>-- Select Programme --</option>
                <option>Dental Surgery Technician</option>
                <option>Dental Therapist</option>
                <option>Dental Surgery Assistant</option>
                <option>Dental Nurses</option>
            </select> 
            <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password" />
            <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Confirm Password" />
            </div>
        </>
    )
}

export default ProfRegisterForm