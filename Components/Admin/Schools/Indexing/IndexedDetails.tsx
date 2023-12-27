import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { indexingActions } from '@/store/indexing-slice';
import apiRequest from '@/APIs/ApiRequests';
import { ToastContainer, toast } from 'react-toastify';

const IndexedDetails:React.FC<{data:Indexing, modalIsOpen:boolean, onCloseModal:() => void}> = (props) => {
  
    const router = useRouter();
    const dispatch = useDispatch()
    const approveIndex = (id:number) => {
        console.log("Approved Index");
        apiRequest.approveIndex(id).then((res) => {
            toast.success(res?.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            })      
        }).catch(err => {
            console.log(err);
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
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>OLevel Result</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Number: </b> {props.data.exam_number}</div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Type: </b> {props.data.exam_type}</div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Year: </b> {props.data.exam_year}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_1} {props.data.grade_1}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_2} {props.data.grade_2}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_3} {props.data.grade_3}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_4} {props.data.grade_4}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_5} {props.data.grade_5}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_1} {props.data.grade_6}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_1} {props.data.grade_7}</div>
                            </div>
                        </div>

                       {props.data.exam_sitting && <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0" >
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>OLevel Result</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Number: </b> {props.data.exam_number}</div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Type: </b> {props.data.exam_type}</div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Examination Year: </b> {props.data.exam_year}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_1_0} {props.data.grade_1_0}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_2_1} {props.data.grade_2_1}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_3_2} {props.data.grade_3_2}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_4_3} {props.data.grade_4_3}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_5_4} {props.data.grade_5_4}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_6_5} {props.data.grade_6_5}</div>
                                <div className="truncate sm:whitespace-normal flex items-center">  {props.data.sub_7_6} {props.data.grade_7_6}</div>
                            </div>
                        </div>
                        }
                
                    </div>
                   

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5 mt-3">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div id="faq-accordion-2" className="accordion accordion-boxed">
                                <div className="accordion-item">
                                    <div id="faq-accordion-content-5" className="accordion-header"> <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#faq-accordion-collapse-5" aria-expanded="true" aria-controls="faq-accordion-collapse-5" style={{color:'red'}}> Dissapprove Submission</button> </div>
                                    <div id="faq-accordion-collapse-5" className="accordion-collapse collapse " aria-labelledby="faq-accordion-content-5" data-tw-parent="#faq-accordion-2">
                                        <div className="accordion-body text-slate-600 dark:text-slate-500 leading-relaxed"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
                                        <button className="btn btn-danger  mr-1 mb-2" > Submit </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 
                            dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <button className="btn btn-success  mr-1 mb-2" style={{width:'100%'}} onClick={() => {approveIndex(props.data.id)}}>Approve Submission</button>
                        </div>
                      
                </div>
        
                </div>
                <ToastContainer />
            </Modal>
        </>
    )
}

export default IndexedDetails