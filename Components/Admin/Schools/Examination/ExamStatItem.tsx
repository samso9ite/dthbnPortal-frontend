import TitleCase from "@/util/TitleCase"
import Link from "next/link"

const ExamStatItem = (props:any) => {
    return(
        <>
        <tr className="intro-x">
            <td className="w-56">
                <div className="flex">
                    <div className="flex items-center justify-center">
                        <b><TitleCase text={props.data?.school} /></b>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-center">
                    {props.data?.limit}
                </div>
            </td>
            <td className="text-center">
                <Link href="exams/[id]/[year]/[type]" as={`exams/${props.data.school_id}/${props.year}/submitted`}> 
                    <button className="btn btn-primary mr-1 mb-2" style={{backgroundColor: '#280742'}} >
                        {props.data?.exams}
                    </button> 
                </Link>
            </td>
            <td className="text-center">
                <Link href="exams/[id]/[year]/[type]" as={`exams/${props.data.school_id}/${props.year}/approved`}> 
                    <button className="btn btn-rounded btn-success mr-1 mb-2" >
                        {props.data?.approved}
                    </button>
                </Link>
            </td>
            <td className="text-center">
                <Link href="exams/[id]/[year]/[type]" as={`exams/${props.data.school_id}/${props.year}/declined`}> 
                    <button className="btn btn-danger mr-1 mb-2" >
                        {props.data?.declined}
                    </button>
                </Link>
            </td>
            <td className="text-center">
                <i className="fa fa-refresh" aria-hidden="true" style={{color: '#280742', fontSize:'large'}}></i> 
            </td>
            <td className="text-center">
                <i className="fa fa-reply" aria-hidden="true" style={{color: '#280742', fontSize:'large'}}></i> 
            </td>
        </tr>
        </>
    )
}

export default ExamStatItem