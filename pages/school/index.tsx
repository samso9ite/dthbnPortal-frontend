import apiRequest from "@/APIs/ApiRequests"
import IndexingList from "@/Components/School/Indexing/IndexingList"
import { useCustomQuery } from "@/Hooks/apiCall"
import MainLayout from "@/Layout/MainLayout"
import {useEffect, useState} from 'react'

const Dashboard = () => {

    const  fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(apiRequest.dashboard, 'dashboard')
        return data?.data.data
    } 
    const response:any = fetchData()
    
    return(
        <MainLayout>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    General Report
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="file-text" className="report-box__icon text-primary" />
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">{response?.total_indexed}</div>
                                            <div className="text-base text-slate-500 mt-1">Total Indexed</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="edit" className="report-box__icon text-pending"/> 
                                              
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">{response?.exam_reg_stud}</div>
                                            <div className="text-base text-slate-500 mt-1"> Registered Exam Student</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="users" className="report-box__icon text-warning"/> 
                                               
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">{response?.notification}</div>
                                            <div className="text-base text-slate-500 mt-1">Message</div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    
                        <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-6 intro-y">  
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">Current Indexing</div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                        
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0" style={{fontSize: '25px'}}>{response?.current_indexing}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-6 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">Current Exam Registeration</div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                        
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0" style={{fontSize: '25px'}}> {response?.current_exam_reg}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <IndexingList />
                    </div>
                </div>
            </div>
        </MainLayout>
     )
}

export default Dashboard