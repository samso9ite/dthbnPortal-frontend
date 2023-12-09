import SideNav from "@/Components/Admin/SideNav";
import MobileNav from "@/Components/Admin/MobileNav";

const AdminLayout = (props:any) => {
    return (
        <>
            <div className="flex mt-[4.7rem] md:mt-0">
                <MobileNav />
                <div className="flex mt-[4.7rem] md:mt-0">
                    <SideNav />
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout