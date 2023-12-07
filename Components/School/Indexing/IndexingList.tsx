import { useDispatch, useSelector } from "react-redux"
import { fetchData, selectIndexedData } from "@/store/indexing-slice"
import IndexingItem from "./IndexingItem"
import { useRouter } from "next/router"
import { useCustomMutation } from "@/Hooks/apiCall";
import ApiStateHandler from "@/util/ApiStateHandler";
import { useState } from "react";
import apiRequest from "@/APIs/ApiRequests";
import PaginatedItems from "@/UI/paginated";
import SearchFilter from "@/Hooks/searchFilter";

const IndexingList:React.FC = () => {
    const router = useRouter()
    const exactPath = router.asPath
    const [notifIsActive, setNotifIsActive] = useState(false)
    const [filteredData, setfilteredData] = useState([])

    const apiStatusHandler = (statusData:boolean) => {
        setNotifIsActive(statusData)
    }
    let showSuccessMsg = true
    const dispatch = useDispatch<any>()
    dispatch(fetchData())
    let response =  useSelector(selectIndexedData)
    let heading; 
    let indexingState = ''
    if(exactPath.includes('/current')){
       response = response?.filter((data:Indexing) => data.submitted == false)
       heading = "Current Indexing Record"
       indexingState = 'current'
    }else if(exactPath.includes('/submitted')){
        response = response?.filter((data:Indexing) => data.submitted == true)
        heading = "Submitted Indexing Record"
        indexingState = "submitted"
    } else if(exactPath.includes('/approved')){
        response = response?.filter((data:Indexing) => {data.approved == true})
        heading = "Approved Indexing Record"
        indexingState="approved"
    }else if(exactPath.includes('/declined')){
       response = response?.filter((data:Indexing) => {data.declined == true})
       heading = "Declined Indexing Record"
       indexingState="declined"
    }
   
    const onSuccess = () => {
        dispatch(fetchData())
    }
    const {handleSubmit, isSuccess, isError, isPending, error, data} = useCustomMutation(apiRequest.submitIndexingForApproval, onSuccess)

    const onSubmitCurrentIndexing = () => {
        handleSubmit('')
    }

    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }

    return(
        <>
            <div className="col-span-12 mt-6">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                <h2 className="text-lg font-medium truncate mr-5">
                        {heading}    
                        </h2>
                    <div className="dropdown">
                        {/* <button className="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" data-tw-toggle="dropdown" style={{backgroundColor: '#280742'}}>Export Record<i className="w-4 h-4" data-lucide="plus"></i> </button> */}
                        {indexingState == 'current' && <button  onClick={onSubmitCurrentIndexing} className="btn  btn-primary shadow-md" 
                        style={{backgroundColor: '#280742'}}> Submit Current Indexing <i className="w-4 h-4"></i> </button> }
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
                        <SearchFilter records={response} getfilteredData={updateFilter} />
                    </div>
                </div>  
                
                    <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                            
                           
                            {filteredData ?  (
                                filteredData?.length !== 0 &&
                                    <PaginatedItems items={filteredData} headerChildren={
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap">IMAGES</th>
                                                <th className="whitespace-nowrap"> NAME</th>
                                                <th className="text-center whitespace-nowrap">CADRE</th>
                                                <th className="text-center whitespace-nowrap"> PHONE</th>
                                                <th className="text-center whitespace-nowrap">ADDRESS</th>
                                                <th className="text-center whitespace-nowrap">SEX</th>
                                                <th className="text-center whitespace-nowrap">AGE</th>
                                                <th className="text-center whitespace-nowrap">RELIGION</th>
                                                <th className="text-center whitespace-nowrap">VIEW</th>
                                            </tr>
                                        </thead>
                                    }>
                                      
                                        { (item:any) => (
                                            <IndexingItem data={item} />
                                        )}
                                      
                                    </PaginatedItems>
                                    ||  <h1 style={{ paddingTop:'30px'}}><b><center>No Record Available</center></b></h1> 
                                ) :
                                ''
                            }
                    </div>
            </div>  
            {notifIsActive && ApiStateHandler (isPending, isError, error, apiStatusHandler,
                 showSuccessMsg, isSuccess, data?.data.message)} 
        </>
    )
}

export default IndexingList