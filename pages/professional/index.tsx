import apiRequest from "@/APIs/ApiRequests"
import { useCustomQuery } from "@/Hooks/apiCall"
import MainLayout from "@/Layout/ProfLayout"
import { useEffect, useState } from "react"
import { Modal } from 'react-responsive-modal';

const Professional = () => {

    const [dashboardDetails, setDashboardDetails] = useState<any>()
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)

    const fetchLicenses = () => {
        apiRequest.profDashboard().then(res => {
            setDashboardDetails(res?.data?.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const onCloseModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        fetchLicenses()
    }, [])

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
                                            <div className="text-3xl font-medium leading-8 mt-6">{dashboardDetails?.license_count}</div>
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
                                            <div className="text-3xl font-medium leading-8 mt-6">3</div>
                                            <div className="text-base text-slate-500 mt-1">Upcoming Event</div>
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
                                    <th className="whitespace-nowrap">Renewal Date</th>
                                    <th className=" whitespace-nowrap">Expiry Date</th>
                                    <th className="text-center whitespace-nowrap">Status</th>
                                    <th className="text-center whitespace-nowrap">View License</th>
                                </tr>
                            </thead>
                            <tbody>
                               { dashboardDetails?.license?.map((item:any) => (
                                    <tr className="intro-x"> 
                                        <td className="w-40">
                                            <div className="flex">
                                                <a  className="font-medium whitespace-nowrap">{item.renewal_date}</a> 
                                            </div>
                                        </td>
                                        <td>
                                            <a  className=" items-center  font-medium whitespace-nowrap">{item.expiry_date}</a> 
                                        </td>
                                        <td className="text-center">{item.status}</td>
                                        <td className="w-40">
                                            <div className="flex items-center justify-center" onClick={ () => setIsModalOpen(true)}> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Click to view </div>
                                        </td>
                                    </tr>
                               ))
                                }
                                <Modal
                    open={modalIsOpen}
                    onClose={onCloseModal}
                    >
                        <div className="intro-y box px-5 pt-5 mt-5" >
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                         kkdskj   
                    </div>
                    </div>
                          
                    </Modal>
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