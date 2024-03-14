import TitleCase from "@/util/TitleCase"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const SideNav = () => {
    const router = useRouter()
    const exactPath = router.asPath
    const [isSubMenuActive , setIsSubMenuActive] = useState<string>()
    const [sch_name, setSchName] = useState<any>()
    const [sch_logo, setSchLogo] = useState<any>()

    const activateSubmenuHandler = (menu:string) => {
        setIsSubMenuActive(menu)
    }
  
    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear()
        router.push('/auth')
    }
    let username = localStorage.getItem('sch_name')
    useEffect(() => {
      setSchName(username)
      setSchLogo(localStorage.getItem('sch_logo'))
    }, [sch_logo])
    
    return ( 
        <>
            <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Dental Board of Nigeria" className="w-10 rounded-full" src={ sch_logo == 'undefined' ? 
                        process.env.NEXT_PUBLIC_URL+"/src/images/logo_dental.png" : sch_logo} />
                   
                    <span className="hidden xl:block text-white text-lg ml-3"><TitleCase text = {username} /> </span> 
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <Link href='/professional' className={router.pathname == '/professional' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Dashboard 
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href='/renew-license' className={router.pathname == '' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                               Renew License 
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href='/renew-license' className={router.pathname == '' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                               Upcoming Events 
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href='/renew-license' className={router.pathname == '' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                               Latest  News  
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href='/professional/profile' className={router.pathname == '/professional/profile' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Profile
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu" onClick={logOut}>
                            <div className="side-menu__icon"> <i data-lucide="power"></i> </div>
                            <div className="side-menu__title">
                                Logout 
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            </>
    )
}

export default SideNav