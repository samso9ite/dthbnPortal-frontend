import PaginatedItems from "@/UI/paginated"
import SearchFilter from "@/Hooks/searchFilter"
import { useCustomQuery } from "@/Hooks/apiCall"
import { useState } from "react"
import IndexingStatItem from "./IndexingStatItem"
import apiRequest from "@/APIs/ApiRequests"

const IndexingStatList = () => {
    const [filteredData, setfilteredData] = useState([])
    const [updatedResponse, setUpdatedResponse] = useState<any>()
    const [indexYear, setIndexYear] = useState<string>('2022-2023')

    const fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(
           () =>  apiRequest.indexedList(indexYear), 'indexing'
        )
        return data?.data.data
    }
    const response:any = fetchData()
    console.log(response);
    

    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }
    return(
        <>
            <div className="col-span-12 mt-6">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <h2 className="text-lg font-medium truncate mr-5">  INDEXING RECORD</h2>
                </div>
                <div className="hidden md:block mx-auto ">
                </div>
                <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                    <SearchFilter records={response?.data}  getfilteredData={updateFilter} />
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
                                            <IndexingStatItem data={item}/>
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

export default IndexingStatList