

const IndexingItem:React.FC<{data: Indexing}> = (props) => {
    console.log(props.data);
    
    return(
        <>
            <tr className="intro-x">
                <td className="w-40">
                    <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                            <img alt="Student Image" className="tooltip rounded-full" src={props.data.profile_image !== null ? props.data.profile_image : "dist/images/preview-12.jpg"} title="Uploaded at 3 June 2020" />
                        </div>
                    
                    </div>
                </td>
                <td>
                    <a href="" className="font-medium whitespace-nowrap">{props.data.surname} {props.data.middlename} {props.data.first_name} </a> 
                </td>
                <td className="text-center">{props.data.cadre}</td>
                <td className="w-40">
                    <div className="flex items-center justify-center">{props.data.telephone}</div>
                </td>
                <td className="table-report__action w-56">
                    <div className="flex justify-center items-center">
                    {props.data.contact_address}
                    </div>
                </td>
                <td className="table-report__action w-56">
                    <div className="flex justify-center items-center">
                    {props.data.sex}
                    </div>
                </td>
                <td className="table-report__action w-56">
                    <div className="flex justify-center items-center">
                    {props.data.age}
                    </div>
                </td>
                <td className="table-report__action w-56">
                    <div className="flex justify-center items-center">
                        {props.data.religion}
                    </div>
                </td>
            </tr>
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
        </>
    )
}

export default IndexingItem