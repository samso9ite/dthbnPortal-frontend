import apiRequest from "@/APIs/ApiRequests"
import { useCustomMutation, useCustomQuery } from "@/Hooks/apiCall"
import SearchFilter from "@/Hooks/searchFilter"
import PaginatedItems from "@/UI/paginated"
import { useState } from "react"
import ReceiptItem from "./item"
import Modal from "react-responsive-modal"
import 'react-responsive-modal/styles.css';
import GenericForm, { FormValues } from "@/UI/genericForm"
import { Fields } from "@/Components/Forms/Forms"
import { toast } from "react-toastify"

const ListLicenseReceipt = () => {
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    const [filteredData, setfilteredData] = useState([])
    // const [remita, setRemita] = useState<any>('')
    // const []

    const fetchData = () => {
        const {isPending, isError, error, data } = useCustomQuery(
            apiRequest.getReceipts, 'professionals'
        )
        return data?.data
    }
    const response:any = fetchData()

    const updateFilter = (filteredData:any) => {
        setfilteredData(filteredData)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    const onSuccess = () => {
        toast.success("Receipt Added", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        })
      fetchData()
    }
    let fileUpload: boolean = true
    const { handleSubmit, isSuccess, isError, error, isPending, data } =
    useCustomMutation((formData: FormValues) => {
        apiRequest.addReceipt(formData, fileUpload)
    }, onSuccess)

    const submitHandler = (formData:any) => {
        handleSubmit(formData)
    }

    return(
        <>
          
         <div className="col-span-12 mt-6">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                <h2 className="text-lg font-medium truncate mr-5"> License Receipts </h2>
                 <button className="btn btn-primary" style={{backgroundColor: '#280742'}} onClick={() => setIsModalOpen(true)}>Upload New License Receipt </button>
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
                                                <th className="whitespace-nowrap">REFERENCE</th>
                                                <th className="whitespace-nowrap"> REMITA NUMBER</th>
                                                <th className="whitespace-nowrap"> RECEIPT</th>
                                                <th className="whitespace-nowrap"> STATUS</th>
                                                </tr>
                                        </thead>
                                    }>
                                        {(item:any) => (
                                            <ReceiptItem data={item} />
                                        )}
                                    </PaginatedItems>
                                    ||  <h1 style={{ paddingTop:'30px'}}><b><center>No Record Available</center></b></h1> 
                                ) : 
                            ''
                            }
                </div>
            </div>  
            <Modal
            open={modalIsOpen}
            onClose={closeModal}
            >
               
                <div className="intro-y box px-5 pt-5 mt-5 col-lg-12" >
               <center> <p style={{fontSize:"17px"}}>Upload Payment Receipt</p> </center>
                        <div className="intro-y box col-span-12 lg:col-span-12" style={{ padding: '2rem' }}>
                            <GenericForm fields={Fields.profLicenceReceiptField} onSubmit={submitHandler} span6={false}
                            />
                        </div>
                    </div>
                  
            </Modal>
        </>
    )
}

export default ListLicenseReceipt