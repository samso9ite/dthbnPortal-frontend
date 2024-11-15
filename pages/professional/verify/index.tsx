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
    const[checked, setChecked] = useState<boolean>(false)

    const fetchLicense = async (data:any) => {
        try {
            const response = await axios.get(api.baseUrl+`professional/verify-license/${data.license_number}/${data.programme}`);
            setLicense(response.data.data);
            setChecked(true)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching license:', error);
            setLoading(false);
        }
    };

     
    const submitHandler = (formData:any) => {
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
            <center className="md:hidden"><img alt="Dental Board of Nigeria"  src={process.env.NEXT_PUBLIC_URL + '/dist/images/dental_logo.png'} /></center>
                <div className={window.innerWidth < 768 ? "xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0" : "h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0"}>
                <div className={`${!checked == true ? 
                    "my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto" 
                    : " "} text-right`}>
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                       {!checked ? 'Verify Professional License' : ''}
                    </h2>
                    {/* {message &&
                        <div className="alert alert-success show mb-2 mt-4" role="alert">{message}</div>
                    } */}
                   {!checked ?
                    <>
                        <p>Please input the registration number of the professional below</p>
                        <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <GenericForm fields={Fields.licenseVerificationField}
                                onSubmit={submitHandler}
                            />
                        </div>
                    </> 
                        :
                    <>
                        <div >
                            <center><img className="text-center mt-10" src={license.license.status == "Valid" ? process.env.NEXT_PUBLIC_URL+"dist/images/valid_icon.png" : process.env.NEXT_PUBLIC_URL+"/dist/images/expired.png"} width="30%"  /></center>
                        </div>
                        
                    <div className="intro-y box  pt-5 mt-5 block xl:grid grid-cols-1 w-full">
                    <div className="flex flex-col lg:flex-row border-b">
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                <img alt="Dental Board of Nigeria" className="rounded-full" src={license.profDetails.profile_image !== null ? license.profDetails.profile_image : process.env.NEXT_PUBLIC_URL+"/dist/images/profile-1.jpg"} />
                            </div>
                            <div className="ml-5">
                                <div className="  truncate sm:whitespace-normal font-medium text-lg">{license?.license.prof?.last_name} {license?.license.prof?.first_name} {license?.license.prof?.middle_name}</div>
                                <div className="text-slate-500">{license?.license.prof?.programme}</div>
                                <div className="text-slate-500">{license?.license.prof?.email}</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="mt-6 lg:mt-0 px-5 border-l border-r dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0" style={{width:"100%"}}> 
                            <div className="font-medium lg:text-left lg:mt-3">License Details</div>
                            <div className="flex flex-col lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex font-medium text-lg "> Last Renewal: {license?.license.renewal_date}</div>
                                <div className="truncate sm:whitespace-normal flex font-medium text-lg mt-3">  Expiry Date: {license?.license.expiry_date} </div>
                                <div className="truncate sm:whitespace-normal flex  font-medium text-lg  mt-3">License Validity: <span style={{ color: license && license.license.status === "Valid" ? "green" : "red", paddingLeft: "5px" }}>{license?.license.status == "Valid" ? "License Up-To-Date" : "License Expired"}</span></div>
                            </div>
                    </div>
                    
                </div>
               <a href="https://dthbn.gov.ng/"> <button className="btn btn-primary py-3 px-4 xl:mr-3 align-top mt-10" type="submit" 
                   > Go Back to Website
                </button></a>  <a href={process.env.NEXT_PUBLIC_URL+"professional/verify"}><button className="btn btn-primary py-3 px-4 xl:mr-3 align-top mt-10" type="submit" 
                   > Check New License
                </button></a>
                    </>
                    }
                </div>
            </div>
        </div>
        <ToastContainer />

    </div>
    )
}
export default VerifyLicense