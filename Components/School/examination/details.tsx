import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { examUpdate, examinationActions } from '@/store/examination-slice';
import { useRouter } from 'next/router';

const ExaminationDetails:React.FC<{data:Examination, modalIsOpen:boolean, onCloseModal:() => void}> = (props) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const examUpdateStatus = useSelector(examUpdate) 
    
    const onEditRecord = () => {
        dispatch(examinationActions.setExaminationStatus(true))
        dispatch(examinationActions.switchState(''))
        dispatch(examinationActions.storeExaminationData(props.data))
        dispatch(examinationActions.setExamUpdate({isUpdate:true, updateRecordKey:props.data.id}))
        router.push('/school/exam/new')
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
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src={props.data.profile_image !== null ? props.data.profile_image : "dist/images/preview-12.jpg"} />
                                <div className="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"> <i className="w-4 h-4 text-white" data-lucide="camera"></i> </div>
                            </div>
                            <div className="ml-5">
                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{props.data.surname} {props.data.first_name} {props.data.middlename}</div>
                                <div className="text-slate-500">{props.data.cadre}</div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>CONTACT DETAILS</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> {props.data.email}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential Country: </b> {props.data.residential_country} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential State : </b> {props.data.residential_state}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential LGA: </b> {props.data.residential_lga} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential Address: </b> {props.data.residential_address}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Senatorial District: </b> {props.data.senatorial_district}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Postal Address: </b> {props.data.postal_address}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> {props.data.telephone} </div>
                            </div>
                        </div>
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>PERSONAL DETAILS</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center"> <b>Title: </b> {props.data.title}</div>
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>First Name: </b> {props.data.first_name}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Middle Name: </b> { props.data.middlename} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Surname: </b> {props.data.surname}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Cadre: </b> {props.data.cadre} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Sex: </b> {props.data.gender} </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                               
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> {props.data.religion}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>State of Birth: </b> {props.data.state_of_birth} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>State of Origin: </b> {props.data.state_of_origin}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>LGA of Birth: </b> {props.data.lga_of_birth} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Marital Status: </b> {props.data.marital_status} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>D.O.B: </b> {props.data.date_of_birth} </div>
                            </div>
                        </div>
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>WORK DETAILS</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Place of Work: </b>{props.data.office_name}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Present Position: </b>{props.data.present_position}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Country: </b> {props.data.office_country} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Address: </b> {props.data.office_address} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office State: </b> {props.data.office_state}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Address: </b> {props.data.office_lga} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Phone: </b> {props.data.office_phone} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Email: </b> {props.data.office_email}</div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>SCHOOLS / QUALIFICATIONS</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center"> <b>Institutions Attended: </b>{props.data.institutions_attended}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Qualifications: </b>{props.data.qualifications}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Professional Qualifications: </b> {props.data.professional_qualifications} </div>
                                <Link href={props.data.waec_result} target='_blank'><button className="btn  mr-1 mb-2 mt-3" style={{width:'100%'}}>O-Level Result</button></Link>
                                <Link href={props.data.dental_school_result} target='_blank'><button className="btn  mr-1 mb-2 mt-3" style={{width:'100%'}}>Dental School Result</button></Link>
                                <Link href={props.data.dental_school_testimonial} target='_blank'><button className="btn  mr-1 mb-2 mt-3" style={{width:'100%'}}>Dental School Testimonial</button></Link>
                            </div>
                        </div>
                
                    </div>
                    {/* <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Junior Leaving Certificate: </b> Herbert Macaulay Junior School</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Seecondary Leaving Certificate: </b> Aiyetoro Senior High School </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> arnoldschwarzenegger@left4code.com </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Address: </b> 20, Ojuelegba Street Yaba Lagos. </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> +234 811 2417 083</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> Christian</div>
                            </div>
                        </div>
                
                    </div> */}

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5 mt-3">
                    
                        {/* <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div id="faq-accordion-2" className="accordion accordion-boxed">
                                <div className="accordion-item">
                                    <div id="faq-accordion-content-5" className="accordion-header"> <button className="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#faq-accordion-collapse-5" aria-expanded="true" aria-controls="faq-accordion-collapse-5" style={{color:'red'}}> Dissapprove Submission</button> </div>
                                    <div id="faq-accordion-collapse-5" className="accordion-collapse collapse " aria-labelledby="faq-accordion-content-5" data-tw-parent="#faq-accordion-2">
                                        <div className="accordion-body text-slate-600 dark:text-slate-500 leading-relaxed"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
                                        <button className="btn btn-danger  mr-1 mb-2" > Submit </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {router.pathname == '/school/exam/current' && <div className="mt-8 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <button className="btn  mr-1 mb-2" style={{width:'100%'}} onClick={onEditRecord}>Edit Exam Record</button>
                            </div>
                        }
                </div>
        
                </div>
            </Modal>
        </>
    )
}

export default ExaminationDetails