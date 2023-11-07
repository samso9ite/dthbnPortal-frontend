import MainLayout from "@/Layout/MainLayout"
import { useEffect } from "react"

const Indexing = () => {
    
    
    return(
            <MainLayout>
                 <h2 className="intro-y text-lg font-medium mt-10">
                    Current Indexing
                </h2>
                <div className="grid grid-cols-12 gap-6 mt-5">
                    <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" data-tw-toggle="dropdown" style={{backgroundColor: '#280742'}}>Export Record<i className="w-4 h-4" data-lucide="plus"></i> </button>
                            <div className="dropdown-menu w-40">
                                <ul className="dropdown-content">
                                    <li>
                                        <a href="" className="dropdown-item"> <i data-lucide="printer" className="w-4 h-4 mr-2"></i> Print </a>
                                    </li>
                                    <li>
                                        <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to Excel </a>
                                    </li>
                                    <li>
                                        <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to PDF </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                            <div className="w-56 relative text-slate-500">
                                <input type="text" className="form-control w-56 box pr-10" placeholder="Search..." />
                                <i className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                            </div>
                        </div>
                    </div>
                    <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                        <table className="table table-report -mt-2">
                            <thead>
                                <tr>
                                    <th className="whitespace-nowrap">IMAGES</th>
                                    <th className="whitespace-nowrap"> NAME</th>
                                    <th className="text-center whitespace-nowrap">PROGRAMME</th>
                                    <th className="text-center whitespace-nowrap"> MATRIC/REG NO</th>
                                    <th className="text-center whitespace-nowrap">PHONE</th>
                                    <th className="text-center whitespace-nowrap">EMAIL</th>
                                    <th className="text-center whitespace-nowrap">View </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="intro-x">
                                    <td className="w-40">
                                        <div className="flex">
                                            <div className="w-10 h-10 image-fit zoom-in">
                                                <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-15.jpg" title="Uploaded at 5 April 2022" />
                                            </div>
                                         
                                        </div>
                                    </td>
                                    <td>
                                        <a href="" className="font-medium whitespace-nowrap">Ajayi Samson</a> 
                                    </td>
                                    <td className="text-center">Dental Therapist</td>
                                    <td className="text-center">RDT/ST/12345</td>
                                    <td className="w-40">
                                        <div className="flex items-center justify-center"> 08112417083 </div>
                                    </td>
                                    <td className="w-40">
                                        <div className="flex items-center justify-center"> samso9ite@gmail.com </div>
                                    </td>
                                    <td className="table-report__action w-56">
                                        <div className="flex justify-center items-center">
                                            <button className="btn btn-primary mr-1 mb-2" data-tw-toggle="modal" data-tw-target="#superlarge-modal-size-preview" style={{backgroundColor: '#280742'}}> <i data-lucide="eye" className="w-5 h-5"></i> </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                                <div id="superlarge-modal-size-preview" className="modal" tabindex="-1" aria-hidden="true">
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content">
                                            <div className="intro-y box px-5 pt-5 mt-5">
                                                <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                                                    <div className="flex  px-5 items-center justify-center lg:justify-start">
                                                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-14.jpg" />
                                                            <div className="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"> <i className="w-4 h-4 text-white" data-lucide="camera"></i> </div>
                                                        </div>
                                                        <div className="ml-5">
                                                            <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">Toafiq Bisola</div>
                                                            <div className="text-slate-500">Dental Therapist</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div className="font-medium text-center lg:text-left lg:mt-3"> <b>Contact Details</b></div>
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
                                                        <button className="btn btn-success  mr-1 mb-2" style={{width: '100%'}}>Approve Submission</button>
                                                    </div>
                                            </div>
                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </table>
                    </div>
                    <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                        <nav className="w-full sm:w-auto sm:mr-auto">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                </li>
                                <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                                <li className="page-item active"> <a className="page-link" href="#">2</a> </li>
                                <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                                <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                <li className="page-item">
                                    <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                </li>
                            </ul>
                        </nav>
                        <select className="w-20 form-select box mt-3 sm:mt-0">
                            <option>10</option>
                            <option>25</option>
                            <option>35</option>
                            <option>50</option>
                        </select>
                    </div>
                </div>
                <div id="delete-confirmation-modal" className="modal" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="p-5 text-center">
                                    <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                    <div className="text-3xl mt-5">Are you sure?</div>
                                    <div className="text-slate-500 mt-2">
                                        Do you really want to delete these records? 
                                        <br />
                                        This process cannot be undone.
                                    </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                    <button type="button" data-tw-dismiss="modal" className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                    <button type="button" className="btn btn-danger w-24">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
    )
}

export default Indexing