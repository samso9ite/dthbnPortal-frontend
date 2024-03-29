import apiRequest from "@/APIs/ApiRequests"
import SearchFilter from "@/Hooks/searchFilter"
import AdminLayout from "@/Layout/AdminLayout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Licenses:React.FC<{ }> = () => {
    const router = useRouter()
    const { id } = router.query;
    const [response, setResponse] = useState<any>()
    const [isModaOpen, setIsModalOpen] = useState<boolean>(false)

    let res:any = [];
    const getLicenses = () => {
        apiRequest.getAllLicense(id).then(
            response => {
               console.log(response?.data);
               res = response?.data
               
               setResponse(response?.data)
        })
    }
    useEffect(() => {
       getLicenses()
    }, [])
    
    return(
        <AdminLayout>
            <div className="col-span-12 mt-6">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                <h2 className="text-lg font-medium truncate mr-5">{response[0].prof.username} License Record</h2>
                    <div className="hidden md:block mx-auto ">
                    </div>
                    
                </div>  
             
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                <table className="table table-report sm:mt-2">
                    <thead>
                        <tr>
                            <th className="whitespace-nowrap"> Renewal Date</th>
                            <th className="text-center whitespace-nowrap">Expiry Date</th>
                            <th className="text-center whitespace-nowrap"> Status</th>
                            <th className="text-center whitespace-nowrap">View/Upload Certificate</th>
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
                                    <button className="btn btn-primary mr-1 mb-2" style={{backgroundColor: '#280742'}} onClick={() => {setIsModalOpen(true)}}>
                                        <i className="fa fa-eye" aria-hidden="true"></i> 
                                    </button>
                                </div>
                            
                            </td>
                        </tr>
                    ))
                    }
                    </table>
                </div>
            </div>  
        </AdminLayout>
    )
}

export default Licenses