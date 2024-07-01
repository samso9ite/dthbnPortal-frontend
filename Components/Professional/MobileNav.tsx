import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const MobileNav = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    const router = useRouter()
    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear()
        router.push('/auth')
    }
    return(
        <>
        <div className={navIsOpen? "mobile-menu group top-0 inset-x-0 fixed"+
        "bg-theme-1/90 z-[60] border-b border-white/[0.08] dark:bg-darkmode-800/90 md:hidden"+
        "before:content-[''] before:w-full before:h-screen before:z-10 before:fixed before:inset-x-0 before:bg-black/90"+
        "before:transition-opacity before:duration-200 before:ease-in-out before:invisible before:opacity-0"+
        "[&amp;.mobile-menu--active]:before:visible [&amp;.mobile-menu--active]:before:opacity-100  mobile-menu--active" : " "} >
            <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href="" className="flex mr-auto">
                    <img alt="Dthbn Logo" className="w-12" src={process.env.NEXT_PUBLIC_URL + '/dist/images/dental_logo.png'} />
                </a>
                <a href="javascript:;" className="mobile-menu-toggler" onClick={() => setNavIsOpen(!navIsOpen)}> 
                    <i className="fa fa-bars" aria-hidden="true" style={{fontSize:"20px", color:"white"}}></i> 
                </a>
            </div>
            <div className="scrollable">
                <a href="javascript:;" className="mobile-menu-toggler" onClick={() => setNavIsOpen(!navIsOpen)}><i className="fa fa-times-circle-o" aria-hidden="true" style={{fontSize:"25px", color:"white"}}></i></a>
                
                <ul  className="scrollable__content py-2">
                    <li>
                        <Link href='/professional' className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Dashboard  </div>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://login.remita.net/remita/onepage/OAGFCRF/biller.spa' className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Renew License  </div>
                        </Link>
                    </li>
                    <li>
                        <a href="javascript:;.html" className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Upcoming Events </div>
                        </a>
                    </li>
                    <li>
                        <Link href='/professional/license' className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title">  Upload License Receipt </div>
                        </Link>
                    </li>
                    <li>
                        <a href="javascript:;.html" className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Latest News  </div>
                        </a>
                    </li>
                 
                    <li>
                        <Link href='/professional/profile' className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Profile  </div>
                        </Link>
                    </li>
                    <li>
                        <a href="https://web.whatsapp.com/send?phone=2349042903236&text=Hello%2C%20I%27m%20from%DTHRBN%20portal%20and%20I%20have%20an%20enquiry" className="menu menu--active" target="_blank">
                            <div className="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="side-menu__title"> Whatsapp Support 1 </div>
                        </a>
                    </li>
                   
                    <li>
                        <a href="https://web.whatsapp.com/send?phone=2348086771485&text=Hello%2C%20I%27m%20from%DTHRBN%20portal%20and%20I%20have%20an%20enquiry" className="menu menu--active" target="_blank">
                            <div className="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="side-menu__title"> Whatsapp Support 2 </div>
                        </a>
                    </li>
                   
                    <li>
                        <a href="javascript:;" className="menu"  onClick={logOut}>
                            <div className="menu__icon"> <i data-lucide="power"></i> </div>
                            <div className="menu__title">
                                Logout 
                            </div>
                        </a>
                    </li>
              
                </ul>
</div>
            
            </div>
        </div>
        
        </>
    )
}

export default MobileNav