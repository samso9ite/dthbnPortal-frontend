import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation, useCustomQuery } from "@/Hooks/apiCall"
import MainLayout from "@/Layout/ProfLayout"
import GenericForm, { FormValues } from "@/UI/genericForm"
import ApiStateHandler from "@/util/ApiStateHandler"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const [formState, setFormState] = useState('profile')
    const [notifIsActive, setNotifIsActive] = useState<boolean>(false)
    // const[profileInitialValues, setProfileInitialValues] = useState<any>()
    let showSuccessMsg = true

    // Getting profile details from the backend 
    const fetchData = () => {
        const { isPending, isError, error, data } = useCustomQuery(apiRequest.dashboard, 'dashboard')
        return data?.data.data
    }

    const response: any = fetchData()
    const onSuccess = () => {
        toast.success("Profile Updated", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        })
        fetchData()
    }

    let fileUpload: boolean = true

    // Submitting the updated form
    const { handleSubmit, isSuccess, isError, error, isPending, data } =
        useCustomMutation((formData: FormValues) => {
            formState == 'profile' &&
            response.school_data.profile_update == false ? apiRequest.createProfile(formData, fileUpload) :
            formState == 'profile' && response.school_data.profile_update == true ?
                apiRequest.updateProfile(formData, fileUpload, response?.school_data.sch_id) :
                apiRequest.changePassword(formData)
        }, onSuccess)

    const submitHandler = (formData: FormValues) => {
        if (formState == 'password') {
            if (formData.new_password === formData.confirm_password) {
                handleSubmit(formData)
            }
        } else {
            handleSubmit(formData)
        }

    }

    let profileInitialValues = {
        address: response?.school_data?.sch_address,
        hod_phone: response?.school_data?.hod_phone,
        hod_name: response?.school_data?.hod_name,
        hod_email: response?.school_data?.hod_email,
        state: response?.school_data?.state,
        region: response?.school_data?.region,
        postal_number: response?.school_data?.postal_number,
        sch_phone: response?.school_data?.sch_phone,
    }

    // useEffect(() => {
    //      setProfileInitialValues({
    //         address: response?.school_data?.sch_address,
    //         hod_phone: response?.school_data?.hod_phone,
    //         hod_name: response?.school_data?.hod_name,
    //         hod_email: response?.school_data?.hod_email,
    //         state: response?.school_data?.state,
    //         region: response?.school_data?.region,
    //         postal_number: response?.school_data?.postal_number,
    //         sch_phone: response?.school_data?.sch_phone,
    //     })
    // }, [response])
    // console.log(profileInitialValues);


    return (
        <>
            <MainLayout>
                <div className="intro-y box px-5 pt-5 mt-5">
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-2 -mx-5">
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                <img alt="School Logo" className="rounded-full" src={response?.school_data?.sch_logo ? response?.school_data?.sch_logo : "dist/images/profile-9.jpg"} />
                            </div>
                            <div className="ml-5">
                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{response?.school_data?.sch_name}</div>
                                <div className="text-slate-500">{response?.school_data?.email}</div>
                                <div className="text-slate-500 mt-2">{response?.school_data?.sch_phone}</div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                            <div className="text-center rounded-md w-20 py-3">
                                <div className="font-medium text-primary text-xl">{response?.total_indexed}</div>
                                <div className="text-slate-500">Total License Renewal</div>
                            </div>

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
                                                initialValues={formState == 'profile' ? profileInitialValues : {}} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 

                    <div id="profile-accordion" className="accordion accordion-boxed mt-5 pb-2"> 
                        <div className="accordion-item"> 
                            <div id="contact-accordion-contentt" className="accordion-header"> 
                                <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#contact-accordion-collapse" aria-expanded="false" aria-controls="contact-accordion-collapse" style={{backgroundColor:"white"}}>  
                                Contact Detail +
                                </button> 
                            </div> 
                            <div id="contact-accordion-collapse" className="accordion-collapse collapse show" aria-labelledby="contact-accordion-contentt" data-tw-parent="#profile-accordion"> 
                                <div id="profile" className="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                                            <GenericForm fields={Fields.profContactFields} onSubmit={submitHandler} span6={true}
                                                initialValues={formState == 'profile' ? profileInitialValues : {}} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 

                    <div id="profile-accordion" className="accordion accordion-boxed mt-5 pb-2"> 
                        <div className="accordion-item"> 
                            <div id="contact-accordion-contentt" className="accordion-header"> 
                                <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#contact-accordion-collapse" aria-expanded="false" aria-controls="contact-accordion-collapse" style={{backgroundColor:"white"}}>  
                                Academic Details +
                                </button> 
                            </div> 
                            <div id="contact-accordion-collapse" className="accordion-collapse collapse show" aria-labelledby="contact-accordion-contentt" data-tw-parent="#profile-accordion"> 
                                <div id="profile" className="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                                            <GenericForm fields={Fields.profAcademicFields} onSubmit={submitHandler} span6={true}
                                                initialValues={formState == 'profile' ? profileInitialValues : {}} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 

                    <div id="profile-accordion" className="accordion accordion-boxed mt-5 pb-2"> 
                        <div className="accordion-item"> 
                            <div id="contact-accordion-contentt" className="accordion-header"> 
                                <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#contact-accordion-collapse" aria-expanded="false" aria-controls="contact-accordion-collapse" style={{backgroundColor:"white"}}>  
                                Work Details +
                                </button> 
                            </div> 
                            <div id="contact-accordion-collapse" className="accordion-collapse collapse show" aria-labelledby="contact-accordion-contentt" data-tw-parent="#profile-accordion"> 
                                <div id="profile" className="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                                            <GenericForm fields={Fields.profWorkFields} onSubmit={submitHandler} span6={true}
                                                initialValues={formState == 'profile' ? profileInitialValues : {}} />
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