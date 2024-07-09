import TitleCase from "@/util/TitleCase"
// import ProfessionalDetails from "./detail";
import { useState } from "react";
import Link from 'next/link';


const ReceiptItem = (props:any) => {
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    
    return(
        <>
            <tr className="intro-x">
                <td>
                    <div className=""><b>
                    <b>{props.data?.reference}</b>
                    </b></div>
                </td>
                <td className="">
                    {props.data?.remita_number}
                </td>
                <td style={{color:"blue"}}><a href={props?.data.license_proof} target="_blank">Click to View</a></td>
                <td className="">
                    {props.data?.status}
                </td>
                <td className="">
                    {props.data?.created_date}
                </td>
               
            </tr>
            {/* <ProfessionalDetails data={props.data} modalIsOpen={modalIsOpen} onCloseModal={() => {setIsModalOpen(false)}}/> */}
        </>
    )
}

export default ReceiptItem