// import MobileNav from "@/Components/Professional/"
import SideNav from "@/Components/Professional/SideNav"

const MainLayout = (props:any) => {
    return (
        <>
            <div className="flex mt-[4.7rem] md:mt-0">
                {/* <MobileNav /> */}
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