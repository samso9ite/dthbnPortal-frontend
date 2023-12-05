import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomQuery } from "@/Hooks/apiCall"
import MainLayout from "@/Layout/MainLayout"
import GenericForm from "@/UI/genericForm"
import { useState } from "react"

const Profile = () => {
    const [formState, setFormState] = useState('profile')
    const  fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(apiRequest.dashboard, 'dashboard')
        return data?.data.data
    } 
    const response:any = fetchData()
    
    const submitHandler = () => {

    }
    
    return (
        <>
        <MainLayout>
             <div className="intro-y box px-5 pt-5 mt-5">
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src={response?.school_data.profile_img ? response?.school_data.profile_img : "dist/images/profile-9.jpg"} />
                            </div>
                            <div className="ml-5">
                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{response?.school_data.sch_name}</div>
                                <div className="text-slate-500">{response?.school_data.email}</div>
                                <div className="text-slate-500 mt-2">{response?.school_data.sch_phone}</div>
                                <div className="text-slate-500 mt-2">{response?.school_data.sch_address}</div>
                                <div className="text-slate-500 mt-2">{response?.school_data.state}</div>
                                <div className="text-slate-500 mt-2">{response?.school_data.region}</div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3">HOD Details</div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <i data-lucide="mail" className="w-4 h-4 mr-2"></i> {response?.school_data.hod_name} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <i data-lucide="instagram" className="w-4 h-4 mr-2"></i> {response?.school_data.hod_email} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <i data-lucide="twitter" className="w-4 h-4 mr-2"></i> {response?.school_data.hod_phone} </div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                            <div className="text-center rounded-md w-20 py-3">
                                <div className="font-medium text-primary text-xl">{response?.total_indexed}</div>
                                <div className="text-slate-500">Total Indexed</div>
                            </div>
                            <div className="text-center rounded-md w-20 py-3">
                                <div className="font-medium text-primary text-xl">{response?.current_indexing}</div>
                                <div className="text-slate-500">Current Indexing</div>
                            </div>
                            <div className="text-center rounded-md w-20 py-3">
                                <div className="font-medium text-primary text-xl">{response?.current_exam_reg}</div>
                                <div className="text-slate-500"> Exam Registration</div>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center" role="tablist" >
                        <li id="profile-tab" className="nav-item" role="presentation"  onClick={() => {setFormState('profile')}}>
                            <a href="javascript:;" className="nav-link py-4 flex items-center active" data-tw-target="#profile" aria-controls="profile" aria-selected="true" role="tab" > <i className="w-4 h-4 mr-2" data-lucide="user"
                            ></i>Update Profile </a>
                        </li>
                       
                        <li id="change-password-tab" className="nav-item" role="presentation"  onClick={() => {setFormState('password')}}>
                            <a href="javascript:;" className="nav-link py-4 flex items-center" data-tw-target="#change-password" aria-selected="false" role="tab" > <i className="w-4 h-4 mr-2" data-lucide="lock"></i> Change Password </a>
                        </li>
                       
                    </ul>
                </div>
                <div className="tab-content mt-5">
                <div id="profile" className="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="intro-y box col-span-12 lg:col-span-12" style={{padding:'2rem'}}>
                                <GenericForm fields={formState == 'profile' ? Fields.schProfileUpdateFields : Fields.resetPwdFields} onSubmit={submitHandler} span6={true} />
                            </div>
                        </div>
                    </div>
                </div>
        </MainLayout>
        </>
    )
}

export default Profile