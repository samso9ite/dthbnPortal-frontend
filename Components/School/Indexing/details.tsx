import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchData, indexingActions } from '@/store/indexing-slice';
import { ToastContainer, toast } from 'react-toastify';
import apiRequest from '@/APIs/ApiRequests';
// import { AppDispatch } from '@/store';

const IndexingDetails:React.FC<{data:Indexing, modalIsOpen:boolean, onCloseModal:() => void}> = (props) => {
  
    const router = useRouter();
    const dispatch = useDispatch<any>()
    const onEditRecord = () => {
        dispatch(indexingActions.setIndexingStatus(true))
        dispatch(indexingActions.switchState(''))
        dispatch(indexingActions.storeIndexingData(props.data))
        dispatch(indexingActions.setIndexingUpdate({isUpdate:true, updateRecordKey:props.data.id}))
        router.push('/school/indexing/new')
    }

    const onDeleteRecord = () => {
        apiRequest.deleteIndexRecord(props.data.id)
        .then(res => {
            props.onCloseModal()
            toast.success("Indexing Record Deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false, 
                closeOnClick: true,
                theme: "light",
            }) 
            let currentYear:any = new Date().getFullYear();
            let previousYear:any = currentYear - 1
            let year = `${previousYear}-${currentYear}`
            dispatch(fetchData(year))    
        }).catch(e => {
            console.log(e);
            
        })
    }

    return (
        <>
            <Modal
                open={props.modalIsOpen}
                onClose={props.onCloseModal}
               >
                <div className="intro-y box px-5 pt-5 mt-5" >
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                        <div className="flex  px-5 items-center justify-center lg:justify-start">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                <img alt="Dental Board of Nigeria" className="rounded-full" src={props.data.profile_image !== null ? props.data.profile_image : "dist/images/preview-12.jpg"} />
                                <div className="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"> <i className="w-4 h-4 text-white" data-lucide="camera"></i> </div>
                            </div>
                            <div className="ml-5">
                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{props.data.surname} {props.data.first_name} {props.data.middlename}</div>
                                <div className="text-slate-500">{props.data.cadre}</div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Contact Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> {props.data.email}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Permanent Address: </b> {props.data.permanent_address} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Contact Address: </b> {props.data.contact_address}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> {props.data.telephone} </div>
                            </div>
                        </div>
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Personal Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>First Name: </b> {props.data.first_name}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Middle Name: </b> { props.data.middlename} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Surname: </b> {props.data.surname}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Cadre: </b> {props.data.cadre} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Sex: </b> {props.data.sex} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Age: </b> {props.data.age} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> {props.data.religion}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Nationality: </b> {props.data.nationality} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>State: </b> {props.data.state} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>LGA: </b> {props.data.lga} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Marital Status: </b> {props.data.marital_status}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Place of Work: </b> {props.data.place_of_work} </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Schools Attended</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start">
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>School:</b> {props.data.school_attended_1} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Admission/Graduation Year:</b> {props.data.school_attended_1} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Qualification:</b> {props.data.qualification_1} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>School: </b>{props.data.school_attended_2} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Admission/Graduation Year:</b> {props.data.school_attended_2} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Qualification:</b> {props.data.qualification_2} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>School: </b>{props.data.school_attended_3} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Admission/Graduation Year:</b> {props.data.school_attended_3} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Qualification:</b> {props.data.qualification_3} </div>
                            </div>
                        </div>
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>O-Level Result </b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Number : {props.data.exam_number}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Type : {props.data.exam_type}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Year : {props.data.exam_year}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_1} : {props.data.grade_1}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_2} : {props.data.grade_2}  </b></div>
                                <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_3} : {props.data.grade_3}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_4} : {props.data.grade_4}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_5} : {props.data.grade_5}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b> {props.data.sub_6} : {props.data.grade_6}</b></div>
                                <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_7} : {props.data.grade_7}</b></div>
                             
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <img src={props.data.o_level_cert} />
                        </div>
                        
                 
                
                    </div>
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    {
                        
                    (props.data.exam_sitting === "2") &&
                     <>
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0" >
                                <div className="font-medium text-center lg:text-left lg:mt-3"> <b>O-Level Result</b></div>
                                <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Number :  {props.data.exam_number_0}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Type :  {props.data.exam_type_0}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Year :  {props.data.exam_year_0}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center"> <b> {props.data.sub_1_0} : {props.data.grade_1_0}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_2_1} : {props.data.grade_2_1}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_3_2} : {props.data.grade_3_2}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_4_3} : {props.data.grade_4_3}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center"> <b> {props.data.sub_5_4} : {props.data.grade_5_4}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_6_5} : {props.data.grade_6_5}</b></div>
                                    <div className="truncate sm:whitespace-normal flex items-center">  <b>{props.data.sub_7_6} : {props.data.grade_7_6}</b></div>
                                </div>
                                
                            </div>
                            <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                <img src={props.data.o_level_cert_0} />
                            </div>
                        </>
                        }
                    </div>
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5 mt-3">
                        {router.asPath.includes('/school/indexing/current') && 
                          <div className="mt-8 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <button className="btn  mr-1 mb-2" onClick={onEditRecord} style={{width:'40%'}}>Edit Indexing Record</button>  <button className="btn btn-danger  mr-1 mb-2" onClick={onDeleteRecord} style={{width:'40%', float:'right'}}>Delete  Record</button>
                            </div>
                        }
                </div>
        
                </div>
            </Modal>
        </>
    )
}

export default IndexingDetails