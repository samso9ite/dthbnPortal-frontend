import TitleCase from "@/util/TitleCase";
import { useState } from "react";
import ExamDetails from "./ExamDetails";

const ExamItem = (props:any) => {
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    
    return(
        <>
              <tr className="intro-x">
                <td className="w-56">
                    <div className="flex">
                        <div className="flex items-center justify-center">
                            <b><TitleCase text={props.data?.first_name + " "+ props.data?.middle_name + " " + props.data?.surname}  /></b>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center">
                        {props.data?.cadre}
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center">
                        {props.data?.contact_address}
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center">
                        {props.data?.telephone}
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center">
                        {props.data?.email}
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center">
                        {props.data?.email}
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
            <ExamDetails data={props.data} modalIsOpen={modalIsOpen} onCloseModal={() => {setIsModalOpen(false)}}/>
        </>
    )
}

export default ExamItem