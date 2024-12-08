import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation, useCustomQuery } from "@/Hooks/apiCall"
import MainLayout from "@/Layout/ProfLayout"
import GenericForm, { FormValues } from "@/UI/genericForm"
import ApiStateHandler from "@/util/ApiStateHandler"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
// import profileImg from '../../'

const Profile = () => {
    const [formState, setFormState] = useState('profile')
    const [notifIsActive, setNotifIsActive] = useState<boolean>(false)
    const[profProfileInitialValues, setprofProfileInitialValues] = useState({})
    const [profAcademicInitialValues, setProfAcademicInitialValues] = useState({})
    const [profContactInitialValues, setProfContactInitialValues] = useState({})
    const [profWorkInitialValues, setProfWorkInitialValues] = useState({})
    const [response, setResponse] = useState<any>()
    let showSuccessMsg = true
    let userId:any = localStorage.getItem('id') 
    // Getting profile details from the backend 
    const fetchData = async (userId:any) => {
       return await apiRequest.getProfile(userId)
    }

    useEffect(() => {
        fetchData(userId)
        .then((response: any) => {
            setResponse(response.data)   
        })
        .catch((error: any) => {
            console.error(error);
    });
    }, [])
   
 
    const onSuccess = () => {
        toast.success("Profile Updated", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        })
        setTimeout(() => {
            fetchData(userId)
            .then((responseData: any) => {
                setResponse(responseData.data)  
            })
            .catch((error: any) => {
                console.error(error);
        });
        }, 3000)
       
    }

    let fileUpload: boolean = true

    // Submitting the updated form
    const { handleSubmit, isSuccess, isError, error, isPending, data } =
    useCustomMutation((formData: FormValues) => {
        localStorage.getItem("profile_update") == "false" 
        // apiRequest.addProfile(formData, fileUpload) :
        apiRequest.updateProfProfile(formData, userId, fileUpload)
    }, onSuccess)

    const submitHandler = (formData:any) => {
        handleSubmit(formData)
    }

    useEffect(() => {
        setprofProfileInitialValues({
            title: response?.title,
            first_name: response?.first_name,
            middle_name: response?.middle_name,
            surname: response?.surname,
            telephone: response?.telephone,
            email: response?.email,
            date_of_birth: response?.date_of_birth,
            religion: response?.religion,
            marital_status: response?.marital_status,
            residential_address: response?.residential_address,
            postal_address: response?.postal_address,
            profile_image: response?.profile_image,
        })
        setProfAcademicInitialValues({
            institution_1: response?.institution_1,
            qualification1: response?.qualification1,
            institution_2: response?.institution_2,
            qualification2: response?.qualification2,
            institution_3: response?.institution_3,
            qualification3: response?.qualification3,
            institution_4: response?.institution_4,
            qualification4: response?.qualification4
        })

        setProfContactInitialValues({
            senatorial_district: response?.senatorial_district,
            residential_country: response?.residential_country,
            residential_state: response?.residential_state,
            residential_lga: response?.residential_lga,
            state_of_birth: response?.state_of_birth,
            lga_of_birth: response?.lga_of_birth
        })

        setProfWorkInitialValues({
            employment_status: response?.employment_status,
            office_name: response?.office_name,
            office_address: response?.office_address,
            office_country: response?.office_country,
            office_state: response?.office_state,
            office_lga: response?.office_lga,
            office_phone: response?.office_phone,
            office_email: response?.office_email,
            department: response?.department,
            present_position: response?.present_position
        })
}, [response])

    return (
        <>
            <MainLayout>
                <div className="intro-y box px-5 pt-5 mt-5">
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-2 -mx-5">
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                <img alt="School Logo" className="rounded-full" src={response?.profile_image !== null ? response?.profile_image : process.env.NEXT_PUBLIC_URL+"dist/images/profile-1.jpg"} />
                            </div>
                            <div className="ml-5">
                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{response?.title} {response?.surname} {response?.first_name}</div>
                                <div className="text-slate-500">{response?.email}</div>
                                <div className="text-slate-500 mt-2">{response?.telephone}</div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                        <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{response?.residential_address}</div>
                        </div>
                    </div>
                    <ul className="nav nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center" role="tablist" >
                        <li id="profile-tab" className="nav-item" role="presentation" onClick={() => { setFormState('profile') }}>
                            <a href="javascript:;" className="nav-link py-4 flex items-center active" data-tw-target="#profile"
                                aria-controls="profile" aria-selected="true" role="tab" > <i className="w-4 h-4 mr-2" data-lucide="user"
                                ></i>Update Profile </a>
                        </li>
                    </ul>

                    <div id="profile-accordion" className="accordion accordion-boxed mt-5 pb-2"> 
                        <div className="accordion-item"> 
                            <div id="profile-accordion-content" className="accordion-header"> 
                                <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#profile-accordion-collapse" aria-expanded="true" aria-controls="profile-accordion-collapse" style={{backgroundColor:"white"}}>  
                                Personal Details +
                                </button> 
                            </div> 
                            <div id="profile-accordion-collapse" className="accordion-collapse collapse show" aria-labelledby="profile-accordion-content" data-tw-parent="#profile-accordion"> 
                                <div id="profile" className="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                                            <GenericForm fields={Fields.profProfileFields} onSubmit={submitHandler} span6={true}
                                                initialValues={profProfileInitialValues} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 

                    <div id="profile-accordion" className="accordion accordion-boxed mt-5 pb-2"> 
                        <div className="accordion-item"> 
                            <div id="contact-accordion-contentt" className="accordion-header"> 
                                <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#contact-accordion-collapse" aria-expanded="true" aria-controls="contact-accordion-collapse" style={{backgroundColor:"white"}}>  
                                Contact Detail +
                                </button> 
                            </div> 
                            <div id="contact-accordion-collapse" className="accordion-collapse collapse show" aria-labelledby="contact-accordion-contentt" data-tw-parent="#profile-accordion"> 
                                <div id="profile" className="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                                            <GenericForm fields={Fields.profContactFields} onSubmit={submitHandler} span6={true}
                                                initialValues={profContactInitialValues} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 

                    <div id="profile-accordion" className="accordion accordion-boxed mt-5 pb-2"> 
                        <div className="accordion-item"> 
                            <div id="contact-accordion-contentt" className="accordion-header"> 
                                <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#contact-accordion-collapse" aria-expanded="true" aria-controls="contact-accordion-collapse" style={{backgroundColor:"white"}}>  
                                Academic Details +
                                </button> 
                            </div> 
                            <div id="contact-accordion-collapse" className="accordion-collapse collapse show" aria-labelledby="contact-accordion-contentt" data-tw-parent="#profile-accordion"> 
                                <div id="profile" className="tab-pane" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                                            <GenericForm fields={Fields.profAcademicFields} onSubmit={submitHandler} span6={true}
                                                initialValues={profAcademicInitialValues} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 

                    <div id="profile-accordion" className="accordion accordion-boxed mt-5 pb-2"> 
                        <div className="accordion-item"> 
                            <div id="contact-accordion-contentt" className="accordion-header"> 
                                <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#contact-accordion-collapse" aria-expanded="true" aria-controls="contact-accordion-collapse" style={{backgroundColor:"white"}}>  
                                Work Details +
                                </button> 
                            </div> 
                            <div id="contact-accordion-collapse" className="accordion-collapse collapse show" aria-labelledby="contact-accordion-contentt" data-tw-parent="#profile-accordion"> 
                                <div id="profile" className="tab-pane " role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                                            <GenericForm fields={Fields.profWorkFields} onSubmit={submitHandler} span6={true}
                                                initialValues={profWorkInitialValues} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div>
                
                {/* {notifIsActive && ApiStateHandler(isPending, isError, error, showSuccessMsg, isSuccess, data?.data.message)} */}
                <ToastContainer />
            </MainLayout>
        </>
    )
}

export default Profile