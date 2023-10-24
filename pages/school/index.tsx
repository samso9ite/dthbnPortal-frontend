import MainLayout from "@/Layout/MainLayout"

const Dashboard = () => {
    return(
        <MainLayout>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-9">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    General Report
                                </h2>
                                <a href="" className="ml-auto flex items-center text-primary"> <i data-lucide="refresh-ccw" className="w-4 h-4 mr-3" /> Reload Data </a>
                            </div>
                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="file-text" className="report-box__icon text-primary" />
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5" /> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">410</div>
                                            <div className="text-base text-slate-500 mt-1">Total Indexed</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="edit" className="report-box__icon text-pending"/> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-danger tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" className="w-4 h-4 ml-0.5"/> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">321</div>
                                            <div className="text-base text-slate-500 mt-1"> Registered Exam Student</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="users" className="report-box__icon text-warning"/> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"/> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">300</div>
                                            <div className="text-base text-slate-500 mt-1">Pre-registered Student</div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    
                        <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">Current Indexing</div>
                                            <div className="text-slate-500 mt-1">300 Sales</div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                        
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0" style={{fontSize: '25px'}}>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">Current Exam Registeration</div>
                                            <div className="text-slate-500 mt-1">1450 </div>
                                        </div>
                                        <div className="flex-none ml-auto relative">
                                        
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0" style={{fontSize: '25px'}}> 45</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-span-12 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Current Indexing Record
                                </h2>
                                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                    <button className="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"/> Export to Excel </button>
                                    <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"/> Export to PDF </button>
                                </div>
                            </div>
                            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <table className="table table-report sm:mt-2">
                                    <thead>
                                        <tr>
                                            <th className="whitespace-nowrap">IMAGES</th>
                                            <th className="whitespace-nowrap"> NAME</th>
                                            <th className="text-center whitespace-nowrap">CADRE</th>
                                            <th className="text-center whitespace-nowrap"> PHONE</th>
                                            <th className="text-center whitespace-nowrap">ADDRESS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                            </td>
                                            <td className="text-center">Dental Therapist</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>
                                            <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                            </td>
                                            <td className="text-center">Dental Therapist</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                            </td>
                                            <td className="text-center">Dental Therapist</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-12.jpg" title="Uploaded at 3 June 2020" />
                                                    </div>
                                                
                                                </div>
                                            </td>
                                            <td>
                                                <a href="" className="font-medium whitespace-nowrap">Emmanuell Babalola Samson</a> 
                                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet</div>
                                            </td>
                                            <td className="text-center">Dental Therapist</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center">0811 2417 983</div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                10, Fashina Street Iwaya Yaba Lagos
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                <nav className="w-full sm:w-auto sm:mr-auto">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left" /> </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left" /> </a>
                                        </li>
                                        <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                        <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                                        <li className="page-item active"> <a className="page-link" href="#">2</a> </li>
                                        <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                                        <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"/> </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"/> </a>
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
                    </div>
                </div>
            
            </div>
        </MainLayout>
     )
}

export default Dashboard