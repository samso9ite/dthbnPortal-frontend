import apiRequest from "@/APIs/ApiRequests"
import SchoolList from "@/Components/Admin/Schools/SchoolList"
import { useCustomQuery } from "@/Hooks/apiCall"
import AdminLayout from "@/Layout/AdminLayout"

const AdminDashboard = () => {
    const  fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(apiRequest.adminDashboard, 'dashboard')
        return data?.data.data
    } 
    const response:any = fetchData()

    return (
        <>
            <AdminLayout>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-12">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 mt-8">
                                <div className="intro-y flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Admin Dashboard
                                    </h2>
                                </div>
                                <div className="grid grid-cols-12 gap-6 mt-5">
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="file-text" className="report-box__icon text-primary" />
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">{response?.total_sch_num}</div>
                                                <div className="text-base text-slate-500 mt-1">Schools</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="edit" className="report-box__icon text-pending"/> 
                                                
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">{response?.total_prof_num}</div>
                                                <div className="text-base text-slate-500 mt-1"> Professionals</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="users" className="report-box__icon text-warning"/> 
                                                
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">{response?.total_submited_index}</div>
                                                <div className="text-base text-slate-500 mt-1">Student Indexed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="users" className="report-box__icon text-warning"/> 
                                                
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">{response?.total_exam_reg}</div>
                                                <div className="text-base text-slate-500 mt-1">Exam Registeration</div>
                                            </div>
                                        </div>
                                    </div>   

                                    <SchoolList />                         
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default AdminDashboard