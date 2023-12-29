import apiRequest from "@/APIs/ApiRequests"
import TitleCase from "@/util/TitleCase"
import Link from "next/link"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const ExamStatItem = (props:any) => {
    const [modalIsOpen, setIsModalOpen] = useState<boolean>(false)
    const [limit, setLimit] = useState<number>(0)
    const reverseSubmission = () => {
        apiRequest.reverseExamSubmission(props.data?.school_id).then((res) => {
            props.refetchData(props.year)
            toast.success(res?.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false, 
                closeOnClick: true,
                theme: "light",
            })      
        }).catch(err => {
            toast.error(err?.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false, 
                closeOnClick: true,
                theme: "light",
            })      
        })
    }

    const onClose = () => {
        setIsModalOpen(false)
    }

    const resetLimit = () => {
        apiRequest.resetExamLimit(props.data?.school_id, props.year, limit).then((res) => {
            onClose()
            props.refetchData(props.year)
            toast.success("School Exam Limit Updated", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false, 
                closeOnClick: true,
                theme: "light",
            })      
        }).catch(err => {
            toast.error(err?.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false, 
                closeOnClick: true,
                theme: "light",
            })      
        })
    }

    const onSetLimit = (e:any) => {
        setLimit(e?.target.value)
    }

    return(
        <>
        <tr className="intro-x">
            <td className="w-56">
                <div className="flex">
                    <div className="flex items-center justify-center">
                        <b><TitleCase text={props.data?.school} /></b>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-center">
                    {props.data?.limit}
                </div>
            </td>
            <td className="text-center">
                <Link href="exams/[id]/[year]/[type]" as={`exams/${props.data.school_id}/${props.year}/submitted`}> 
                    <button className="btn btn-primary mr-1 mb-2" style={{backgroundColor: '#280742'}} >
                        {props.data?.exams}
                    </button> 
                </Link>
            </td>
            <td className="text-center">
                <Link href="exams/[id]/[year]/[type]" as={`exams/${props.data.school_id}/${props.year}/approved`}> 
                    <button className="btn btn-rounded btn-success mr-1 mb-2" >
                        {props.data?.approved}
                    </button>
                </Link>
            </td>
            <td className="text-center">
                <Link href="exams/[id]/[year]/[type]" as={`exams/${props.data.school_id}/${props.year}/declined`}> 
                    <button className="btn btn-danger mr-1 mb-2" >
                        {props.data?.declined}
                    </button>
                </Link>
            </td>
            <td className="text-center">
                <a href="#!" onClick={() => {setIsModalOpen(true)}}>
                    <i className="fa fa-refresh" aria-hidden="true" style={{color: '#280742', fontSize:'large'}}></i> 
                </a>
            </td>
            <td className="text-center">
                <a className=""  href="#!" onClick={reverseSubmission}>
                    <i className="fa fa-reply" aria-hidden="true" style={{color: '#280742', fontSize:'large'}}></i> 
                </a>
            </td>
        </tr>
        <Modal
            open={modalIsOpen}
            onClose={onClose}
            >
            <div style={{padding:'20px'}}>
                <h1 style={{fontSize:'15px', fontWeight:'500'}}>Reset Exam Limit for <TitleCase text={props.data?.school} /></h1><br/>
                
                <center >  
                    <input type="text" placeholder="Please Insert Limit"  onChange={onSetLimit}/> 
                    <button className="dropdown-toggle btn btn-primary" aria-expanded="false" 
                        style={{marginLeft:'10px'}} onClick={resetLimit}>Reset Limit
                    </button>
                </center>
                
            </div>
        </Modal>
        <ToastContainer />
        </>
    )
}

export default ExamStatItem