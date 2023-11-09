import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const IndexingDetails:React.FC<{data:Indexing, modalIsOpen:boolean}> = (props) => {
    const onCloseModal = () => {

    }

    return (
        <>
            <Modal
                open={props.modalIsOpen}
                onClose={onCloseModal}
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
                            <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Contact Details</b></div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                <div className="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> {props.data.email}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Address: </b> {props.data.contact_address} </div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> {props.data.telephone}</div>
                                <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> {props.data.religion} </div>
                            </div>
                        </div>
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
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
                
                    </div>

                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
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
                
                    </div>
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
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
                        <div className="mt-8 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <button className="btn btn-success  mr-1 mb-2" style={{width:'100%'}}>Approve Submission</button>
                        </div>
                </div>
        
                </div>
            </Modal>
        </>
    )
}

export default IndexingDetails