import TitleCase from "@/util/TitleCase"
import { useState } from "react"
import SchoolDetails from "./SchoolDetails"


const SchoolItem = (props:any) => {
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    const refetchData = () => {
        props.triggerDataRefetch()
    }
    return (
        <>
             <tr className="intro-x">
                <td className="w-56">
                    <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                            <img alt="Student Image" className="tooltip rounded-full" 
                            src={props.data?.sch_logo !== null ? props.data?.sch_logo : 
                            "dist/images/preview-12.jpg"} />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center"><b>
                       <TitleCase text={props.data.User?.username} />
                    </b></div>
                </td>
                <td className="text-center">
                    {props.data.User?.code}
                </td>
                <td className="text-center">
                    <div className="flex items-center justify-center">{props.data?.hod_phone}</div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                    <TitleCase text={props.data?.address} />
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                    <TitleCase text={props.data?.hod_name} />
                    </div>
                </td>
               
                <td className="table-report__action ">
                    <div className="flex justify-center items-center">
                        <button className="btn btn-primary mr-1 mb-2" style={{backgroundColor: '#280742'}} onClick={() => {setIsModalOpen(true)}}>
                            <i className="fa fa-eye" aria-hidden="true"></i> 
                        </button>
                    </div>
                </td>
            </tr>
            <SchoolDetails data={props.data} modalIsOpen={modalIsOpen} onCloseModal={() => {setIsModalOpen(false)}} refetchData={refetchData}/>
        </>
    )
}

export default SchoolItem