import PaginatedItems from "@/UI/paginated"
import SearchFilter from "@/Hooks/searchFilter"
import { useCustomQuery } from "@/Hooks/apiCall"
import { useEffect, useState } from "react"
import IndexingStatItem from "./IndexingStatItem"
import apiRequest from "@/APIs/ApiRequests"
import { ToastContainer, toast } from "react-toastify"

const IndexingStatList = () => {
    const [filteredData, setfilteredData] = useState([])
    const [indexYear, setIndexYear] = useState<string>('')
    const [indexingStatus, setIndexingStatus] = useState<boolean>(false)
    const [response, setResponse] = useState<any>({})

    const fetchData = (year:string) => {
        console.log(year);
        console.log("ERunning");
        
        apiRequest.indexedList(year).then((res) => {
            setResponse(res?.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const fetchIndexingStatus = () => {
        apiRequest.indexStatus().then((res) => {
            setIndexingStatus(res?.data.access)
        }).catch(err => {
            console.log(err);
        })
    }

    const yearRange = () => {
        let currentYear:any = new Date().getFullYear()
        let previousYear:any = currentYear - 1
        let newYear:[string] = ['']
        while(previousYear >= 2019 ){
            previousYear = previousYear.toString()
            const yearRange = `${previousYear} - ${currentYear}`;
            newYear.push(yearRange)
            currentYear --
            previousYear --
        }
        return newYear
    }  
    let yearArr = yearRange()

    useEffect(() => {
        fetchIndexingStatus()
        let currentYear:any = new Date().getFullYear();
        let previousYear:any = currentYear - 1
        setIndexYear(`${previousYear}-${currentYear}`)
        fetchData(indexYear)
    }, [indexYear])
    
    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }

    const indexingSwitch = (type:string) => {
        apiRequest.indexRegSwitch(type).then((res) => {
            fetchIndexingStatus()
            toast.success(res?.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            })      
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <>
            <div className="col-span-12 mt-6">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <h2 className="text-lg font-medium truncate mr-5">  INDEXING RECORD</h2>{indexingStatus}
                    <div>
                        <button className="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" 
                        style={{backgroundColor: '#280742'}} onClick={() => 
                            {indexingSwitch(indexingStatus == true ? 'close' : 'open')}}>
                            {indexingStatus == true ?  'Close Indexing' : 'Open Indexing'}
                            <i className="fa fa-power-off w-4 h-4" style={{paddingLeft:'5px'}}></i> 
                        </button>
                    </div>
                     
                    <div className="dropdown"> <button className="dropdown-toggle btn btn-primary" aria-expanded="false" 
                    data-tw-toggle="dropdown" style={{marginLeft:'10px'}}>Display Record By Year</button>
                        <div className="dropdown-menu w-40">
                            <ul className="dropdown-content">
                            {yearArr.map((year, index) => (
                                <li key={index}><a className="dropdown-item" href="#!" onClick={(e) => {
                                    e.preventDefault();
                                    fetchData(year);
                                  }}> {year} </a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block mx-auto ">
                    </div>
                    <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                        <SearchFilter records={response?.all_schools}  getfilteredData={updateFilter} />
                    </div>
                </div>
               
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                        {filteredData ?  (
                                filteredData?.length !== 0 &&
                                    <PaginatedItems items={filteredData} headerChildren={
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap">SCHOOL NAME</th>
                                                <th className="text-center whitespace-nowrap">LIMIT</th>
                                                <th className="text-center whitespace-nowrap"> INDEXED</th>
                                                <th className="text-center whitespace-nowrap">APPROVED</th>
                                                <th className="text-center whitespace-nowrap">DECLINED</th>
                                                <th className="text-center whitespace-nowrap">RESET LIMIT</th>
                                                <th className="text-center whitespace-nowrap">REVERSE</th>
                                            </tr>
                                        </thead>
                                    }>
                                        {(item:any) => (
                                            <IndexingStatItem data={item} year={response?.year}/>
                                        )}
                                    </PaginatedItems>
                                    ||  <h1 style={{ paddingTop:'30px'}}><b><center>No Record Available</center></b></h1> 
                                ) :
                            ''
                        }
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default IndexingStatList