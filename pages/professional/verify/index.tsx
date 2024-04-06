import apiRequest from "@/APIs/ApiRequests"
import api from "@/APIs/api"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, { FormValues } from "@/UI/genericForm"
import axios from "axios"
import { useState } from "react"
import { ToastContainer } from "react-toastify"

const VerifyLicense = () => {
    const[license, setLicense] = useState<any>({})
    const[loading, setLoading] = useState<boolean>(false)

    const fetchLicense = async (licenseId:any) => {
        console.log(licenseId);
        
        try {
            const response = await axios.get(api.baseUrl+`professional/verify-license/${licenseId.license_number}/`);
            setLicense(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching license:', error);
            setLoading(false);
        }
    };

     
    const submitHandler = (formData:any) => {
        console.log(formData);
        
       fetchLicense(formData)
    }

    return(
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
                    <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Verify a Professional License </div>
                </div>
            </div>
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent
                 px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                        Verify Professional License
                    </h2>
                    {/* {message &&
                        <div className="alert alert-success show mb-2 mt-4" role="alert">{message}</div>
                    } */}
                    <p>Please input the registeration number of the professional below</p>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <GenericForm fields={Fields.licenseVerificationField}
                            onSubmit={submitHandler}
                        />
                    </div>
     
                </div>
            </div>
        </div>
        <ToastContainer />

    </div>
    )
}
export default VerifyLicense