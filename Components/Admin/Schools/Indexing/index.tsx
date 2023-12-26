import apiRequest from "@/APIs/ApiRequests"
import { useCustomQuery } from "@/Hooks/apiCall"
import SearchFilter from "@/Hooks/searchFilter"
import PaginatedItems from "@/UI/paginated"
import { useState } from "react"
import IndexedItem from "./IndexedItem"
import { useRouter } from "next/router"
import { useParams } from "next/navigation"

const Indexed = () => {
    const [filteredData, setfilteredData] = useState([])
    const [updatedResponse, setUpdatedResponse] = useState<any>()
    const [indexYear, setIndexYear] = useState<string>('2022-2023')
    const router = useRouter()
    const params = useParams()
 let id ='1'
    const fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(
           () =>  apiRequest.schIndexedRec(params.id, params.year, params.type ), 'indexed'
        )
        return data?.data.data
    }
    const response:any = fetchData()
    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }
    return (
        <>
        <div className="col-span-12 mt-6">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                <h2 className="text-lg font-medium truncate mr-5">  INDEXED RECORD</h2>
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
                                            <th className="whitespace-nowrap">NAME</th>
                                            <th className="text-center whitespace-nowrap">CATEGORIES</th>
                                            <th className="text-center whitespace-nowrap"> ADDRESS</th>
                                            <th className="text-center whitespace-nowrap">CONTACT</th>
                                            <th className="text-center whitespace-nowrap">EMAIL</th>
                                            <th className="text-center whitespace-nowrap"> STATUS</th>
                                            <th className="text-center whitespace-nowrap">VIEW</th>
                                        </tr>
                                    </thead>
                                    }>
                                    {(item:any) => (
                                        <IndexedItem data={item}/>
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

export default Indexed