
import apiRequest from "@/APIs/ApiRequests"
import { useCustomQuery } from "@/Hooks/apiCall"
import MainLayout from "@/Layout/ProfLayout"
import { useEffect } from "react"

const Professional = () => {

    const fetchLicenses = () => {
        console.log("Checking if this works");
        
        const { isPending, isError, error, data } = useCustomQuery(apiRequest.getAllLicense, 'license')
        return data?.data.data
    }
    fetchLicenses()
    // useEffect(() => {
    //     const fetchData = () => {
    //         const { isPending, isError, error, data } = useCustomQuery(apiRequest.dashboard, 'dashboard')
    //         return data?.data.data
    //     }
    // }, [])
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
                                            {/* <div className="text-3xl font-medium leading-8 mt-6">{response?.total_indexed}</div> */}
                                            <div className="text-base text-slate-500 mt-1">Total License Renewal</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="edit" className="report-box__icon text-pending"/> 
                                              
                                            </div>
                                            {/* <div className="text-3xl font-medium leading-8 mt-6">{response?.exam_reg_stud}</div> */}
                                            <div className="text-base text-slate-500 mt-1">Upcoming Event</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="users" className="report-box__icon text-warning"/> 
                                               
                                            </div>
                                            {/* <div className="text-3xl font-medium leading-8 mt-6">{response?.notification}</div> */}
                                            <div className="text-base text-slate-500 mt-1">Notifications</div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                      
                        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                        {/* <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5 mt-10">
                                    License Renewal History
                                </h2>
                            </div> */}
                        <table className="table table-report mt-5">
                            <thead>
                                <tr>
                                    <th className="text-center whitespace-nowrap">Registration Number</th>
                                    <th className="whitespace-nowrap">Renewal Date</th>
                                    <th className="text-center whitespace-nowrap">Expiry Year</th>
                                    <th className="text-center whitespace-nowrap">Status</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="intro-x">
                                    <td className="w-40">
                                        <div className="flex">
                                            <a href="" className="font-medium whitespace-nowrap">Samsung Galaxy S20 Ultra</a> 
                                        </div>
                                    </td>
                                    <td>
                                        <a href="" className="font-medium whitespace-nowrap">Samsung Galaxy S20 Ultra</a> 
                                    </td>
                                    <td className="text-center">50</td>
                                    <td className="w-40">
                                        <div className="flex items-center justify-center text-success"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                    </td>
                                    
                                  
                                </tr>
                           
                           
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Professional