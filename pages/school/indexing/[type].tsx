import IndexingList from "@/Components/School/Indexing/IndexingList"
import MainLayout from "@/Layout/MainLayout"
import { useEffect } from "react"

const Indexing = () => {
    
    
    return(
            <MainLayout>
                <IndexingList />
                <div id="delete-confirmation-modal" className="modal"  aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="p-5 text-center">
                                    <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                    <div className="text-3xl mt-5">Are you sure?</div>
                                    <div className="text-slate-500 mt-2">
                                        Do you really want to delete these records? 
                                        <br />
                                        This process cannot be undone.
                                    </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                    <button type="button" data-tw-dismiss="modal" className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                    <button type="button" className="btn btn-danger w-24">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
    )
}

export default Indexing