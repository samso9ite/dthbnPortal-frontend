import TitleCase from "@/util/TitleCase"


const SchoolItem = (props:any) => {
    
    return (
        <>
             <tr className="intro-x">
                <td className="w-56">
                    <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                            <img alt="Student Image" className="tooltip rounded-full" 
                            src={props.data.User?.school_logo !== null ? props.data.User?.school_logo : 
                            "dist/images/preview-12.jpg"} />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center justify-center"><b>
                       <TitleCase text={props.data.User?.username} />
                    </b></div>
                </td>
                <td className="text-center">
                    {props.data.User?.code}
                </td>
                <td className="text-center">
                    <div className="flex items-center justify-center">{props.data.User?.phone_number}</div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                    <TitleCase text={props.data?.address} />
                    </div>
                </td>
                <td className="text-center">
                    <div className="flex justify-center items-center">
                    <TitleCase text={props.data?.hod_name} />
                    </div>
                </td>
               
                <td className="table-report__action ">
                    <div className="flex justify-center items-center">
                        <button className="btn btn-primary mr-1 mb-2" style={{backgroundColor: '#280742'}} >
                            <i className="fa fa-eye" aria-hidden="true"></i> 
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default SchoolItem