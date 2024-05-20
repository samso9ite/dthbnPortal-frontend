import apiRequest from "@/APIs/ApiRequests"
import { useCustomQuery } from "@/Hooks/apiCall"
import SearchFilter from "@/Hooks/searchFilter"
import PaginatedItems from "@/UI/paginated"
import { useState } from "react"
import ProfessiionalItem from "./item"

const ProfessionalList = () => {
    const [updatedResponse, setUpdatedResponse] = useState<any>()
    const [filteredData, setfilteredData] = useState([])

    const fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(
            apiRequest.allProfessionals, 'professionals'
        )
        
        return data?.data?.data
    }
    const response:any = fetchData()

    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }

    return(
        <>
          
         <div className="col-span-12 mt-6">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
            <h2 className="text-lg font-medium truncate mr-5"> Professionals </h2>
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
                    <SearchFilter records={response}  getfilteredData={updateFilter} />
                </div>
            </div>  
             
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                        {filteredData ?  (
                                filteredData?.length !== 0 &&
                                    <PaginatedItems items={filteredData} headerChildren={
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap">IMAGE</th>
                                                <th className="whitespace-nowrap"> NAME</th>
                                                <th className="whitespace-nowrap"> LICENSE</th>
                                                <th className="text-center whitespace-nowrap">EMAIL</th>
                                                <th className="text-center whitespace-nowrap"> PHONE</th>
                                                <th className="text-center whitespace-nowrap">ADDRESS</th>
                                                <th className="text-center whitespace-nowrap">STATE</th>
                                                <th className="whitespace-nowrap"> RELIGION</th>
                                               
                                                <th className="text-center whitespace-nowrap">DOB</th>
                                            </tr>
                                        </thead>
                                    }>
                                        {(item:any) => (
                                            <ProfessiionalItem data={item} />
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

export default ProfessionalList