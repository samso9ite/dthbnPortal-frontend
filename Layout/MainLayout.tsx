import MobileNav from "@/Components/MobileNav"
import SideNav from "@/Components/SideNav"
import TopBar from "@/Components/TopBar"

const MainLayout = (props) => {
    return (
        <>
            <div class="flex mt-[4.7rem] md:mt-0">
                <MobileNav />
                <div class="flex mt-[4.7rem] md:mt-0">
                    <SideNav />
                    <div class="content">
                        <TopBar />
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout