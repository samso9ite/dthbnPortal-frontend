import TitleCase from "@/util/TitleCase";
import Modal from "react-responsive-modal"
import 'react-responsive-modal/styles.css';

const ProfessionalDetails:React.FC<{data:any, modalIsOpen:boolean, onCloseModal:() => void}> = (props) => {
    return(
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
                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg"> 
                                    <TitleCase text={`${props.data?.title} ${props.data?.first_name} ${props.data?.middle_name} ${props.data?.last_name}`}/> 
                                </div>
                                {/* <div className="text-slate-500">{props.data.cadre}</div> */}
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Contact Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> {props.data.email}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential Address: </b> {props.data.residential_address} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Postal Address: </b> {props.data.postal_address}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> {props.data.telephone} </div>
                            </div>
                        </div>
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Personal Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                               <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Sex: </b> {props.data.gender} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>D.O.B: </b> {props.data.date_of_birth} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> {props.data.religion}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Nationality: </b> {props.data.nationality} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>State: </b> {props.data.state} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Senatorial District: </b> {props.data.senatorial_district} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential Country: </b> {props.data.residential_country}</div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Personal Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start">
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential State: </b> {props.data.residential_state}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Residential LGA: </b> {props.data.residential_lga}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>State LGA:</b> {props.data.lga_state} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>State of Origin:</b> {props.data.state_of_origin} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>LGA of Origin:</b> {props.data.lga_of_origin} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>LGA of Birth:</b> {props.data.lga_of_birth} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Marital Status: </b> {props.data.marital_status}</div>
                              
                            </div>
                        </div>
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                        <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Work Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Employment State:</b> {props.data.employment_status} </div>
                               {props.data.employment_status !== "unemployed" && <span> <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Present Position:</b> {props.data.present_position} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Department:</b> {props.data.department} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office: </b>{props.data.office_name} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Address :</b> {props.data.office_address} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Phone:</b> {props.data.office_phone} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Office Email: </b>{props.data.office_email} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b> Sector:</b> {props.data.sector} </div>
                                </span>
                                }    
                            </div>
                        </div>

                       {props.data.exam_sitting && <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0" >
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Qualifications / Certifications</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center"> <b>Qualification 1: </b> {props.data.qualification1}</div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Qualification 2 :</b> {props.data.qualification2} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Qualification 3:</b> {props.data.qualification3} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b> Professional Qualification 1: </b>{props.data.prof_qualification1} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Professional Qualification 2 :</b> {props.data.prof_qualification2} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Professional Qualification 3:</b> {props.data.prof_qualification3} </div>
                            </div>
                        </div>
                        }
                
                    </div>
                   

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5 mt-3">
                    
                         
                </div>
        
                </div>
        </Modal>
        </>
    )
}

export default ProfessionalDetails