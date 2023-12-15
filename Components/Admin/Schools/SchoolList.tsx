import { useCustomQuery } from "@/Hooks/apiCall"
import SchoolItem from "./SchoolItem"
import apiRequest from "@/APIs/ApiRequests"
import PaginatedItems from "@/UI/paginated"
import SearchFilter from "@/Hooks/searchFilter"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const SchoolList = () => {
    const [filteredData, setfilteredData] = useState([])
    const [updatedResponse, setUpdatedResponse] = useState<any>()
    const [header, setHeader] = useState<string>()
    const router = useRouter()
    let path = router.pathname
    const fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(
            apiRequest.accreditedSchools, 'schools'
        )
        return data
    }
    const response:any = fetchData()
    useEffect(() => {
        setUpdatedResponse(response);
        if(path == '/admin'){
            setHeader('Accredited Schools')
        }else{
            setHeader("All Schools")
        }
    }, [response]);

    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }
    return (
        <>
         <div className="col-span-12 mt-6">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
            <h2 className="text-lg font-medium truncate mr-5"> {header} </h2>
                <div className="dropdown">
                    {/* <button className="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" data-tw-toggle="dropdown" style={{backgroundColor: '#280742'}}>Export Record<i className="w-4 h-4" data-lucide="plus"></i> </button> */}
                    {/* {examinationState == 'current' && <button  onClick={onSubmitCurrentExamination} className="btn  btn-primary shadow-md" 
                    style={{backgroundColor: '#280742'}} >Submit Current Examination<i className="w-4 h-4"></i> </button>} */}
                    {/* <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                            <li>
                                <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to Excel </a>
                            </li>
                            <li>
                                <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to PDF </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="hidden md:block mx-auto ">
                </div>
                <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                    <SearchFilter records={updatedResponse?.data}  getfilteredData={updateFilter} />
                </div>
            </div>  
             
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                        {filteredData ?  (
                                filteredData?.length !== 0 &&
                                    <PaginatedItems items={filteredData} headerChildren={
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap">LOGO</th>
                                                <th className="whitespace-nowrap"> NAME</th>
                                                <th className="text-center whitespace-nowrap">REG NUMBER</th>
                                                <th className="text-center whitespace-nowrap"> PHONE</th>
                                                <th className="text-center whitespace-nowrap">ADDRESS</th>
                                                <th className="text-center whitespace-nowrap">HOD</th>
                                                <th className="text-center whitespace-nowrap">VIEW</th>
                                            </tr>
                                        </thead>
                                    }>
                                        {(item:any) => (
                                            <SchoolItem data={item} />
                                        )}
                                    </PaginatedItems>
                                    ||  <h1 style={{ paddingTop:'30px'}}><b><center>No Record Available</center></b></h1> 
                                ) :
                            ''
                            }
                        {/* </tbody>
                    </table> */}
                </div>
            
        </div>  
        </>
    )
}

export default SchoolList