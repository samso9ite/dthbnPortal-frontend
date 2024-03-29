import { useDispatch, useSelector } from "react-redux"
import { fetchData, selectIndexedData } from "@/store/indexing-slice"
import IndexingItem from "./IndexingItem"
import { useRouter } from "next/router"
import { useCustomMutation } from "@/Hooks/apiCall";
import ApiStateHandler from "@/util/ApiStateHandler";
import { useEffect, useState } from "react";
import apiRequest from "@/APIs/ApiRequests";
import PaginatedItems from "@/UI/paginated";
import SearchFilter from "@/Hooks/searchFilter";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ToastContainer } from "react-toastify";

const IndexingList:React.FC = () => {
    const router = useRouter()
    const exactPath = router.asPath
    const [notifIsActive, setNotifIsActive] = useState(false)
    const [indexYear, setIndexYear] = useState<string>('')
    const [filteredData, setfilteredData] = useState([])
    const [yearDisplay, setYearDisplay] = useState<string> ('')
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)

    const apiStatusHandler = (statusData:boolean) => {
        setNotifIsActive(statusData)
    }
    const dispatch = useDispatch<any>()
    let showSuccessMsg = true
    useEffect(() => {
        let currentYear:any = new Date().getFullYear();
        let previousYear:any = currentYear - 1
        let year = `${previousYear}-${currentYear}`
        dispatch(fetchData(year))
    }, [])
    
    
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
       response = response?.filter((data:Indexing) => {data.unapproved == true})
       heading = "Declined Indexing Record"
       indexingState="declined"
    }
   
    const onSuccess = () => {
        dispatch(fetchData(indexYear))
    }
    const {handleSubmit, isSuccess, isError, isPending, error, data} = 
    useCustomMutation(apiRequest.submitIndexingForApproval, onSuccess)

    const onSubmitCurrentIndexing = () => {
        handleSubmit('')
    }

    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }

    const yearRange = () => {
        let currentYear:any = new Date().getFullYear()
        let previousYear:any = currentYear - 1
        let newYear:[string] = ['']
        while(previousYear >= 2019 ){
            previousYear = previousYear.toString()
            const yearRange = `${previousYear}-${currentYear}`;
            newYear.push(yearRange)
            currentYear --
            previousYear --
        }
        return newYear
    }  
    let yearArr = yearRange()
    const onCloseModal = () => {
        setIsModalOpen(false)
    }
    return(
        <>
            <div className="col-span-12 mt-6">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <h2 className="text-lg font-medium truncate mr-5">
                        {heading}    
                    </h2>
                    <div className="dropdown">
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
                    <div className="dropdown"> <button className="dropdown-toggle btn btn-primary" aria-expanded="false" 
                        style={{marginLeft:'10px'}} onClick={() => {setIsModalOpen(true)}}>Display Record By Year</button>
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
                                                <th className="text-center whitespace-nowrap">ACTION</th>
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
                    <Modal
                        open={modalIsOpen}
                        onClose={onCloseModal}
                    >
                            <ul className="dropdown-content">
                                {yearArr.map((year, index) => (
                                <li key={index} style={{padding: '10px'}}><a className="dropdown-item"  href="#!" onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(fetchData(year))
                                    }}> {year} </a>
                                </li>
                                ))}
                            </ul>
                    </Modal>
            </div>  
            {notifIsActive && ApiStateHandler (isPending, isError, error, apiStatusHandler,
                 showSuccessMsg, isSuccess, data?.data.message)} 
            <ToastContainer />
        </>
    )
}

export default IndexingList