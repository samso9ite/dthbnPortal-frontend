import MainLayout from "@/Layout/MainLayout"

const Dashboard = () => {
    return(
        <MainLayout>
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 2xl:col-span-9">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-12 mt-8">
                            <div class="intro-y flex items-center h-10">
                                <h2 class="text-lg font-medium truncate mr-5">
                                    General Report
                                </h2>
                                <a href="" class="ml-auto flex items-center text-primary"> <i data-lucide="refresh-ccw" class="w-4 h-4 mr-3" /> Reload Data </a>
                            </div>
                            <div class="grid grid-cols-12 gap-6 mt-5">
                                <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div class="report-box zoom-in">
                                        <div class="box p-5">
                                            <div class="flex">
                                                <i data-lucide="file-text" class="report-box__icon text-primary" />
                                                <div class="ml-auto">
                                                    <div class="report-box__indicator bg-success tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5" /> </div>
                                                </div>
                                            </div>
                                            <div class="text-3xl font-medium leading-8 mt-6">410</div>
                                            <div class="text-base text-slate-500 mt-1">Total Indexed</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div class="report-box zoom-in">
                                        <div class="box p-5">
                                            <div class="flex">
                                                <i data-lucide="edit" class="report-box__icon text-pending"/> 
                                                <div class="ml-auto">
                                                    <div class="report-box__indicator bg-danger tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"/> </div>
                                                </div>
                                            </div>
                                            <div class="text-3xl font-medium leading-8 mt-6">321</div>
                                            <div class="text-base text-slate-500 mt-1"> Registered Exam Student</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div class="report-box zoom-in">
                                        <div class="box p-5">
                                            <div class="flex">
                                                <i data-lucide="users" class="report-box__icon text-warning"/> 
                                                <div class="ml-auto">
                                                    <div class="report-box__indicator bg-success tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"/> </div>
                                                </div>
                                            </div>
                                            <div class="text-3xl font-medium leading-8 mt-6">300</div>
                                            <div class="text-base text-slate-500 mt-1">Pre-registered Student</div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    
                        <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
                            <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div class="box p-5 zoom-in">
                                    <div class="flex items-center">
                                        <div class="w-2/4 flex-none">
                                            <div class="text-lg font-medium truncate">Current Indexing</div>
                                            <div class="text-slate-500 mt-1">300 Sales</div>
                                        </div>
                                        <div class="flex-none ml-auto relative">
                                        
                                            <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0" style={{fontSize: '25px'}}>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div class="box p-5 zoom-in">
                                    <div class="flex items-center">
                                        <div class="w-2/4 flex-none">
                                            <div class="text-lg font-medium truncate">Current Exam Registeration</div>
                                            <div class="text-slate-500 mt-1">1450 </div>
                                        </div>
                                        <div class="flex-none ml-auto relative">
                                        
                                            <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0" style={{fontSize: '25px'}}> 45</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="col-span-12 mt-6">
                            <div class="intro-y block sm:flex items-center h-10">
                                <h2 class="text-lg font-medium truncate mr-5">
                                    Current Indexing Record
                                </h2>
                                <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                    <button class="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" class="hidden sm:block w-4 h-4 mr-2"/> Export to Excel </button>
                                    <button class="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" class="hidden sm:block w-4 h-4 mr-2"/> Export to PDF </button>
                                </div>
                            </div>
                            <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <table class="table table-report sm:mt-2">
                                    <thead>
                                        <tr>
                                            <th class="whitespace-nowrap">IMAGES</th>
                                            <th class="whitespace-nowrap"> NAME</th>
                                            <th class="text-center whitespace-nowrap">CADRE</th>
                                            <th class="text-center whitespace-nowrap"> PHONE</th>
                                            <th class="text-center whitespace-nowrap">ADDRESS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="intro-x">
                                            <td class="w-40">
                                                <div class="flex">
                                                    <div class="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" class="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                            </td>
                                            <td class="text-center">Dental Therapist</td>
                                            <td class="w-40">
                                                <div class="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td class="table-report__action w-56">
                                                <div class="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>
                                            <tr class="intro-x">
                                            <td class="w-40">
                                                <div class="flex">
                                                    <div class="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" class="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                            </td>
                                            <td class="text-center">Dental Therapist</td>
                                            <td class="w-40">
                                                <div class="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td class="table-report__action w-56">
                                                <div class="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="intro-x">
                                            <td class="w-40">
                                                <div class="flex">
                                                    <div class="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" class="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                            </td>
                                            <td class="text-center">Dental Therapist</td>
                                            <td class="w-40">
                                                <div class="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td class="table-report__action w-56">
                                                <div class="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="intro-x">
                                            <td class="w-40">
                                                <div class="flex">
                                                    <div class="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" class="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                                <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet</div>
                                            </td>
                                            <td class="text-center">Dental Therapist</td>
                                            <td class="w-40">
                                                <div class="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td class="table-report__action w-56">
                                                <div class="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                <nav class="w-full sm:w-auto sm:mr-auto">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left" /> </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left" /> </a>
                                        </li>
                                        <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                        <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                        <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                                        <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                        <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"/> </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"/> </a>
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
                    </div>
                </div>
            
            </div>
        </MainLayout>
     )
}

export default Dashboard