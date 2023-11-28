
import { useState } from "react"
import ExaminationDetails from "./details"

const ExaminationItem:React.FC<{data: Indexing}> = (props) => {
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    
    return(
        <>
            <tr className="intro-x">
                <td className="w-56">
                    <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                            <img alt="Student Image" className="tooltip rounded-full" src={props.data.profile_image !== null ? props.data.profile_image : "dist/images/preview-12.jpg"} />
                        </div>
                    </div>
                </td>
                <td>
                    <a href="" className="font-medium whitespace-nowrap">{props.data.surname} {props.data.middlename} {props.data.first_name} </a> 
                </td>
                <td className="text-center">{props.data.cadre}</td>
                <td className="text-center">
                    <div className="flex items-center justify-center">{props.data.telephone}</div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                    {props.data.contact_address}
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                    {props.data.sex}
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                        {props.data.age}
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                        {props.data.religion}
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
            <ExaminationDetails data={props.data} modalIsOpen={modalIsOpen} onCloseModal={() => {setIsModalOpen(false)}}/>
        </>
    )
}

export default ExaminationItem