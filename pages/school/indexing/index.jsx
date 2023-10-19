import MainLayout from "@/Layout/MainLayout"

const Indexing = () => {
    return(
            <MainLayout>
                 <h2 class="intro-y text-lg font-medium mt-10">
                    Current Indexing
                </h2>
                <div class="grid grid-cols-12 gap-6 mt-5">
                    <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                        <div class="dropdown">
                            <button class="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" data-tw-toggle="dropdown" style={{backgroundColor: '#280742'}}>Export Record<i class="w-4 h-4" data-lucide="plus"></i> </button>
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="printer" class="w-4 h-4 mr-2"></i> Print </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="file-text" class="w-4 h-4 mr-2"></i> Export to Excel </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="file-text" class="w-4 h-4 mr-2"></i> Export to PDF </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                            <div class="w-56 relative text-slate-500">
                                <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />
                                <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                            </div>
                        </div>
                    </div>
                    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                        <table class="table table-report -mt-2">
                            <thead>
                                <tr>
                                    <th class="whitespace-nowrap">IMAGES</th>
                                    <th class="whitespace-nowrap"> NAME</th>
                                    <th class="text-center whitespace-nowrap">PROGRAMME</th>
                                    <th class="text-center whitespace-nowrap"> MATRIC/REG NO</th>
                                    <th class="text-center whitespace-nowrap">PHONE</th>
                                    <th class="text-center whitespace-nowrap">EMAIL</th>
                                    <th class="text-center whitespace-nowrap">View </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="intro-x">
                                    <td class="w-40">
                                        <div class="flex">
                                            <div class="w-10 h-10 image-fit zoom-in">
                                                <img alt="Midone - HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-15.jpg" title="Uploaded at 5 April 2022" />
                                            </div>
                                         
                                        </div>
                                    </td>
                                    <td>
                                        <a href="" class="font-medium whitespace-nowrap">Ajayi Samson</a> 
                                    </td>
                                    <td class="text-center">Dental Therapist</td>
                                    <td class="text-center">RDT/ST/12345</td>
                                    <td class="w-40">
                                        <div class="flex items-center justify-center"> 08112417083 </div>
                                    </td>
                                    <td class="w-40">
                                        <div class="flex items-center justify-center"> samso9ite@gmail.com </div>
                                    </td>
                                    <td class="table-report__action w-56">
                                        <div class="flex justify-center items-center">
                                            <button class="btn btn-primary mr-1 mb-2" data-tw-toggle="modal" data-tw-target="#superlarge-modal-size-preview" style={{backgroundColor: '#280742'}}> <i data-lucide="eye" class="w-5 h-5"></i> </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                                <div id="superlarge-modal-size-preview" class="modal" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="intro-y box px-5 pt-5 mt-5">
                                                <div class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                                                    <div class="flex  px-5 items-center justify-center lg:justify-start">
                                                        <div class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                                            <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-14.jpg" />
                                                            <div class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"> <i class="w-4 h-4 text-white" data-lucide="camera"></i> </div>
                                                        </div>
                                                        <div class="ml-5">
                                                            <div class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">Toafiq Bisola</div>
                                                            <div class="text-slate-500">Dental Therapist</div>
                                                        </div>
                                                    </div>
                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div class="font-medium text-center lg:text-left lg:mt-3"> <b>Contact Details</b></div>
                                                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                                                            <div class="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> arnoldschwarzenegger@left4code.com </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Address: </b> 20, Ojuelegba Street Yaba Lagos. </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> +234 811 2417 083</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> Christian</div>
                                                        </div>
                                                    </div>
                                              
                                                </div>

                                                <div class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                                                 
                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div class="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                                                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                                                            <div class="truncate sm:whitespace-normal flex items-center"> <b>Junior Leaving Certificate: </b> Herbert Macaulay Junior School</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Seecondary Leaving Certificate: </b> Aiyetoro Senior High School </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                                                        </div>
                                                    </div>

                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div class="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                                                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                                                            <div class="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> arnoldschwarzenegger@left4code.com </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Address: </b> 20, Ojuelegba Street Yaba Lagos. </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> +234 811 2417 083</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> Christian</div>
                                                        </div>
                                                    </div>
                                              
                                                </div>

                                                <div class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                                                 
                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div class="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                                                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                                                            <div class="truncate sm:whitespace-normal flex items-center"> <b>Junior Leaving Certificate: </b> Herbert Macaulay Junior School</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Seecondary Leaving Certificate: </b> Aiyetoro Senior High School </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                                                        </div>
                                                    </div>

                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div class="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                                                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                                                            <div class="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> arnoldschwarzenegger@left4code.com </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Address: </b> 20, Ojuelegba Street Yaba Lagos. </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> +234 811 2417 083</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> Christian</div>
                                                        </div>
                                                    </div>
                                              
                                                </div>
                                                <div class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                                                 
                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div class="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                                                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                                                            <div class="truncate sm:whitespace-normal flex items-center"> <b>Junior Leaving Certificate: </b> Herbert Macaulay Junior School</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Seecondary Leaving Certificate: </b> Aiyetoro Senior High School </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Tertiary Institution: </b> Yaba College of Technology</div>
                                                        </div>
                                                    </div>

                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div class="font-medium text-center lg:text-left lg:mt-3"> <b>Academic Details</b></div>
                                                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                                                            <div class="truncate sm:whitespace-normal flex items-center"> <b>Email: </b> arnoldschwarzenegger@left4code.com </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Address: </b> 20, Ojuelegba Street Yaba Lagos. </div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone: </b> +234 811 2417 083</div>
                                                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <b>Religion: </b> Christian</div>
                                                        </div>
                                                    </div>
                                              
                                                </div>

                                                <div class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5 mt-3">
                                                 
                                                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <div id="faq-accordion-2" class="accordion accordion-boxed">
                                                            <div class="accordion-item">
                                                                <div id="faq-accordion-content-5" class="accordion-header"> <button class="accordion-button" type="button" data-tw-toggle="collapse" data-tw-target="#faq-accordion-collapse-5" aria-expanded="true" aria-controls="faq-accordion-collapse-5" style={{color:'red'}}> Dissapprove Submission</button> </div>
                                                                <div id="faq-accordion-collapse-5" class="accordion-collapse collapse " aria-labelledby="faq-accordion-content-5" data-tw-parent="#faq-accordion-2">
                                                                    <div class="accordion-body text-slate-600 dark:text-slate-500 leading-relaxed"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
                                                                    <button class="btn btn-danger  mr-1 mb-2" > Submit </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mt-8 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                        <button class="btn btn-success  mr-1 mb-2" style={{width: '100%'}}>Approve Submission</button>
                                                    </div>
                                            </div>
                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </table>
                    </div>
                    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                        <nav class="w-full sm:w-auto sm:mr-auto">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                </li>
                                <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                                <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                </li>
                            </ul>
                        </nav>
                        <select class="w-20 form-select box mt-3 sm:mt-0">
                            <option>10</option>
                            <option>25</option>
                            <option>35</option>
                            <option>50</option>
                        </select>
                    </div>
                </div>
                <div id="delete-confirmation-modal" class="modal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="p-5 text-center">
                                    <i data-lucide="x-circle" class="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                    <div class="text-3xl mt-5">Are you sure?</div>
                                    <div class="text-slate-500 mt-2">
                                        Do you really want to delete these records? 
                                        <br />
                                        This process cannot be undone.
                                    </div>
                                </div>
                                <div class="px-5 pb-8 text-center">
                                    <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                    <button type="button" class="btn btn-danger w-24">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
    )
}

export default Indexing