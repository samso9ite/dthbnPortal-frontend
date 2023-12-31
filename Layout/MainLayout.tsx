import MobileNav from "@/Components/MobileNav"
import SideNav from "@/Components/SideNav"

const MainLayout = (props:any) => {
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

export default MainLayout