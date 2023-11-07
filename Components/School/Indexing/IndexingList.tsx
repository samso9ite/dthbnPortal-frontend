import { useCustomQuery } from "@/Hooks/apiCall"
import apiRequest from "@/APIs/ApiRequests"
import IndexingItem from "./IndexingItem"

const IndexingList = () => {
    
    const  fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(apiRequest.indexingList, 'indexing')
        return data?.data
    } 
    const response = fetchData()
   
    return(
        <>
        <div className="col-span-12 mt-6">
             <div className="intro-y block sm:flex items-center h-10">
                    <h2 className="text-lg font-medium truncate mr-5">
                        Current Indexing Record
                    </h2>
                    <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                        <button className="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"/> Export to Excel </button>
                        <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"/> Export to PDF </button>
                    </div>
                </div>
                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                    <table className="table table-report sm:mt-2">
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
                            </tr>
                        </thead>
                        <tbody>
                        {
                            response?.map((data:Indexing) => (
                                <IndexingItem data={data} />
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            
        </div>     
        </>
    )
}

export default IndexingList