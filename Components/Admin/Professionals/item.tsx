import TitleCase from "@/util/TitleCase"
import ProfessionalDetails from "./detail";
import { useState } from "react";
import Link from 'next/link';


const ProfessiionalItem = (props:any) => {
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    
    return(
        <>
            <tr className="intro-x">
                <td className="w-56">
                    <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                            <img alt="Student Image" className="tooltip rounded-full" 
                            src={props.data.profile_image !== null ? process.env.NEXT_PUBLIC_API_IMG_BASE_URL+props.data.profile_image : 
                            "dist/images/preview-12.jpg"} />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center"><b>
                       <TitleCase text={`${props.data?.title !== null ? props.data?.title  : "" } 
                       ${props.data?.first_name !== null ? props.data?.first_name : ""} 
                       ${props.data?.middle_name !== null ? props.data?.middle_name : ""} 
                       ${props.data?.surname !== null ? props.data?.surname : ""}`}/>
                    </b></div>
                </td>
                <td className="text-center">
                    <b>{props.data?.profuser?.code}</b>
                </td>
                <td className="text-center">
                    {props.data?.email}
                </td>
                <td className="text-center">
                    <div className="flex items-center justify-center">{props.data?.telephone}</div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                    <TitleCase text={props.data?.residential_address} />
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                        <TitleCase text={props.data?.residential_state} />
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                        <TitleCase text={props.data?.religion} />
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                        <TitleCase text={props.data?.date_of_birth} />
                    </div>
                </td>
                <td className="table-report__action ">
                    <div className="flex justify-center items-center">
                        <button className="btn btn-primary mr-1 mb-2" 
                            style={{backgroundColor: '#280742'}} onClick={() => {setIsModalOpen(true)}}>
                            <i className="fa fa-eye" aria-hidden="true"></i> 
                        </button>
                        <Link href={`professionals/license/${props.data?.profuser.id}`} className="btn btn-primary mr-1 mb-2" style={{backgroundColor: '#280742'}}>
                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                        </Link>
                    </div>
                  
                </td>
            </tr>
            <ProfessionalDetails data={props.data} modalIsOpen={modalIsOpen} onCloseModal={() => {setIsModalOpen(false)}}/>
        </>
    )
}

export default ProfessiionalItem