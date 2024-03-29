import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import SearchFilter from "@/Hooks/searchFilter"
import AdminLayout from "@/Layout/AdminLayout"
import GenericForm from "@/UI/genericForm"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Modal } from 'react-responsive-modal';

const Licenses:React.FC<{ }> = () => {
    const router = useRouter()
    const { id } = router.query;
    const [response, setResponse] = useState<any>([])
    const [isModaOpen, setIsModalOpen] = useState<boolean>(false)
    let licenseInitialValues = {};
    const getLicenses = () => {
        apiRequest.getAllLicense(id).then(
            response => {
                setResponse(response?.data) 

        })
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    useEffect(() => {
        getLicenses()
        licenseInitialValues = {
            "renewal_date": response?.renewal_date,
            "expiry_date": response?.expiry_date,
            "status": response?.status
        }
    }, [])

    const submitHandler = () => {

    }
    
    return(
        <AdminLayout>
            <div className="col-span-12 mt-6">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <h2 className="text-lg font-medium truncate mr-5">{response.length > 0 && response[0].prof.username} License Record</h2><button className=" btn btn-primary" aria-expanded="false" 
                        style={{marginLeft:'10px'}} onClick={() => {setIsModalOpen(true)}}>Create License Record</button>
                </div>  
                <div> 
                    </div>
             
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                <table className="table table-report sm:mt-2">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap"> Renewal Date</th>
                            <th className="text-center whitespace-nowrap">Expiry Date</th>
                            <th className="text-center whitespace-nowrap"> Status</th>
                            <th className="text-center whitespace-nowrap">View/Edit Certificate</th>
                        </tr>
                    </thead>
                    {response?.map((item:any) => (
                        <tr className="intro-x">
                            <td className="text-center">
                                <div className="flex items-center justify-center"> {item.renewal_date} </div>
                            </td>
                            <td className="text-center">
                                <div className="flex items-center justify-center"> {item.expiry_date} </div>
                            </td>
                            <td className="text-center">
                                <div className="flex items-center justify-center"> {item.status} </div>
                            </td>
                            <td className="table-report__action ">
                                <div className="flex justify-center items-center">
                                    <button className="btn btn-primary mr-1 mb-2" style={{backgroundColor: '#280742'}} onClick={openModal}>
                                        <i className="fa fa-eye" aria-hidden="true"></i> 
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                    }
                    </table>
                </div>
                <Modal open={isModaOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="intro-y box px-5 pt-5 mt-5" >
                        <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                            <GenericForm fields={Fields.licenseFormFields} onSubmit={submitHandler} span6={true}
                                initialValues={licenseInitialValues} 
                            />
                        </div>
                    </div>
                </Modal>
            </div>  
        </AdminLayout>
    )
}

export default Licenses