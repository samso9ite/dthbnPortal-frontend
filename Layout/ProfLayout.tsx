import MobileNav from "@/Components/Professional/MobileNav"
import SideNav from "@/Components/Professional/SideNav"

const MainLayout = (props:any) => {
    return (
        <>
            <div className="flex  md:mt-0">
                <MobileNav />
                <div className="flex md:mt-0">
                    <SideNav />
                    <div className="content mt-[4.7rem]">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout