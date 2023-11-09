import { useDispatch, useSelector } from "react-redux"
import { fetchData, selectIndexedData } from "@/store/indexing-slice"
import IndexingItem from "./IndexingItem"

const IndexingList = () => {
    const dispatch = useDispatch<any>()
    dispatch(fetchData())
    const response =  useSelector(selectIndexedData)
   
    return(
        <>
        <div className="col-span-12 mt-6">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
            <h2 className="text-lg font-medium truncate mr-5">
                                Current Indexing Record
                            </h2>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" data-tw-toggle="dropdown" style={{backgroundColor: '#280742'}}>Export Record<i className="w-4 h-4" data-lucide="plus"></i> </button>
                            <div className="dropdown-menu w-40">
                                <ul className="dropdown-content">
                                    <li>
                                        <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to Excel </a>
                                    </li>
                                    <li>
                                        <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to PDF </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block mx-auto ">
                        </div>
                        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                            <div className="w-56 relative text-slate-500">
                                <input type="text" className="form-control w-56 box pr-10" placeholder="Search..." />
                                <i className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                            </div>
                        </div>
                    </div>
             
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
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
                                <th className="text-center whitespace-nowrap">VIEW</th>
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