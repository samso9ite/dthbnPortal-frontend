import { useState } from "react"
import { useRouter } from "next/router"
import { useParams } from "next/navigation"
import IndexedList from "@/Components/Admin/Schools/Indexing/IndexedList"
import AdminLayout from "@/Layout/AdminLayout"

const Indexed = () => {
    const params = useParams()
    const router = useRouter()
    const {id, year, type} = router.query
   
    return (
        <AdminLayout>
            <IndexedList id={id} year={year} type={type} />
        </AdminLayout>
    )
}

export default Indexed