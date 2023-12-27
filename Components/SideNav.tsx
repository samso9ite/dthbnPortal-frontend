import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const SideNav = () => {
    const router = useRouter()
    const exactPath = router.asPath
    const [isSubMenuActive , setIsSubMenuActive] = useState<string>()
    const [sch_name, setSchName] = useState<any>()

    const activateSubmenuHandler = (menu:string) => {
        setIsSubMenuActive(menu)
    }
  
    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear()
        router.push('/auth')
    }

    useEffect(() => {
      setSchName(localStorage.getItem('sch_name'))
    }, [])
    
    return ( 
        <>
            <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Dental Board of Nigeria" className="w-6" src={process.env.NEXT_PUBLIC_URL+"src/images/logo_dental.png"} />
                    <span className="hidden xl:block text-white text-lg ml-3"> {sch_name} </span> 
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <Link href='/school' className={router.pathname == '/school' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Dashboard 
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="javascript:;" className={exactPath.includes('/school/indexing')  ? "side-menu side-menu--active" : 'side-menu'} onClick={() => activateSubmenuHandler('indexing')}>
                            <div className="side-menu__icon"> <i data-lucide="file-text"></i> </div>
                            <div className="side-menu__title">
                                Indexing 
                                <div className="side-menu__sub-icon "> <i className="fa fa-chevron-circle-down" aria-hidden="true"></i> </div>
                            </div>
                        </Link>
                        <ul className={isSubMenuActive == 'indexing' ? 'side-menu__sub-open' : ''}>
                            <li>
                                <Link href="/school/indexing/new" className={exactPath == '/school/indexing/new' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Create New Index </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/indexing/current" className={exactPath == '/school/indexing/current' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Current Index Record </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/indexing/submitted" className={exactPath == '/school/indexing/submitted' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Submitted Index Record </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/indexing/approved" className={exactPath == '/school/indexing/approved' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Approved Index Record </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/indexing/declined" className={exactPath == '/school/indexing/declined' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Declined Index Record </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="javascript:;" className={exactPath.includes('/school/exam')  ? "side-menu side-menu--active" : 'side-menu'} onClick={() => activateSubmenuHandler('exam')}>
                            <div className="menu__icon"> <i data-lucide="edit"></i> </div>
                            <div className="side-menu__title">
                                Examination 
                                <div className="side-menu__sub-icon "> <i className="fa fa-chevron-circle-down" aria-hidden="true"></i> </div>
                            </div>
                        </Link>
                        <ul className={isSubMenuActive == 'exam' ? 'side-menu__sub-open' : ''}>
                            <li>
                                <Link href="/school/exam/new" className={exactPath == '/school/exam/new' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Create New Exam Record </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/exam/current" className={exactPath == '/school/exam/current' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Current Exam Record </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/exam/submitted" className={exactPath == '/school/exam/submitted' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Submitted Exam Record </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/exam/approved" className={exactPath == '/school/approved/approved' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title">
                                        Approved Exam Record 
                                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/school/exam/declined" className={exactPath == '/school/exam/approved' ? "side-menu side-menu--active" : 'side-menu'}>
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title">
                                        Delined Exam Record
                                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </Link>
                            </li>
                           
                        </ul>
                    </li>

                    <li className="side-nav__devider my-6"></li>
                   
                    <li>
                        <a href="side-menu-light-chat.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="side-menu__title"> Whatsapp Support 1 </div>
                        </a>
                    </li>
                   
                    <li>
                        <a href="side-menu-light-chat.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="side-menu__title"> Whatsapp Support 2 </div>
                        </a>
                    </li>

                    <li className="side-nav__devider my-6"></li>
                
                    <li>
                        <Link href='/school/profile' className={router.pathname == '/school/profile' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="trello"></i> </div>
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