import PaginatedItems from "@/UI/paginated"
import SearchFilter from "@/Hooks/searchFilter"
import { useCustomQuery } from "@/Hooks/apiCall"
import { useEffect, useState } from "react"
import apiRequest from "@/APIs/ApiRequests"
import ExamStatItem from "./ExamStatItem"
import { toast } from "react-toastify"

const ExamStatList = () => {
    const [filteredData, setfilteredData] = useState([])
    const [updatedResponse, setUpdatedResponse] = useState<any>()
    const [examYear, setExamYear] = useState<string>('2021-2022')
    const [examStatus, setExamStatus] = useState<boolean>(false)
    const [response, setResponse] = useState<any>({})
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    const [yearDisplay, setYearDisplay] = useState<string> ('')
    
    const fetchData = (year:string) => {
        setYearDisplay(year)
        apiRequest.examList(year).then((res) => {
            setResponse(res?.data.data)
        }).catch(err => {
            console.log(err);
        })
        onCloseModal()
    }

    const fetchExamStatus = () => {
        apiRequest.examStatus().then((res) => {
            setExamStatus(res?.data.access)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchExamStatus()
        let currentYear:any = new Date().getFullYear();
        let previousYear:any = currentYear - 1
        setExamYear(`${previousYear}-${currentYear}`)
        fetchData(examYear)
    }, [examYear])

    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }

    const examSwitch = (type:string) => {
        apiRequest.examRegSwitch(type).then((res) => {
            fetchExamStatus()
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

    const onCloseModal = () => {
        setIsModalOpen(false)
    }

    return(
        <>
            <div className="col-span-12 mt-6">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <h2 className="text-lg font-medium truncate mr-5">  EXAMINATION RECORD</h2>
                    <div>
                        <button className="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" 
                        style={{backgroundColor: '#280742'}} onClick={() => 
                            {examSwitch(examStatus == true ? 'close' : 'open')}}>
                            {examStatus == true ?  'Close Exam Registeration' : 'Open Exam Registeration'}
                            <i className="fa fa-power-off w-4 h-4" style={{paddingLeft:'5px'}}></i> 
                        </button>
                      
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
                                                <th className="text-center whitespace-nowrap"> SUBMITTED</th>
                                                <th className="text-center whitespace-nowrap">APPROVED</th>
                                                <th className="text-center whitespace-nowrap">DECLINED</th>
                                                <th className="text-center whitespace-nowrap">RESET LIMIT</th>
                                                <th className="text-center whitespace-nowrap">REVERSE</th>
                                            </tr>
                                        </thead>
                                    }>
                                        {(item:any) => (
                                            <ExamStatItem data={item} year={response?.year}/>
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

export default ExamStatList