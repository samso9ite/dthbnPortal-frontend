const { default: MainLayout } = require("@/Layout/MainLayout")

const GenerateLicense = () => {
    return(
        <MainLayout>
             <h2 className="intro-y text-lg font-medium mt-10">
                    Generate Code
                </h2>
                <div className="grid grid-cols-12 gap-6 mt-5">
                    <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle btn-primary shadow-md" aria-expanded="false" data-tw-toggle="dropdown" style="background-color:#280742">Export Record<i className="w-4 h-4" data-lucide="plus"></i> </button>
                        
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
                                    <th className="text-center whitespace-nowrap">CODE GENERATION</th>
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
                                            <button className="btn btn-rounded btn-success-soft w-24 mr-1 mb-2">Generate</button> 
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
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
        </MainLayout>
    )
}

export default GenerateLicense