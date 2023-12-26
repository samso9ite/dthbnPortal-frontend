import { useRouter } from "next/router"
import AdminLayout from "@/Layout/AdminLayout"
import ExamList from "@/Components/Admin/Schools/Examination/ExamList"

const ExamReg = () => {
    const router = useRouter()
    const {id, year, type} = router.query
   
    return (
        <AdminLayout>
            <ExamList id={id} year={year} type={type} />
        </AdminLayout>
    )
}

export default ExamReg