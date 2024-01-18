import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const SideNav = () => {
    const router = useRouter()
    const exactPath = router.asPath
    
    const logOut = () => {
        sessionStorage.clear()
        localStorage.clear()
        router.push('/auth')
    }
    
    return ( 
        <>
            <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Dental Board of Nigeria" className="w-6" src={process.env.NEXT_PUBLIC_URL+"/src/images/logo_dental.png"} />
                    <span className="hidden xl:block text-white text-lg ml-3"> Dental Board of Nigeria </span> 
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <Link href='/admin' className={router.pathname == '/school' ? "side-menu side-menu--active" : 'side-menu'}>
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Dashboard 
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/schools" className={router.pathname == '/admin/schools'  ? "side-menu side-menu--active" : 'side-menu'} >
                            <div className="side-menu__icon"> <i data-lucide="file-text"></i> </div>
                            <div className="side-menu__title">
                                All Schools 
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/professionals" className={exactPath.includes('/admin/professionals')  ? "side-menu side-menu--active" : 'side-menu'} >
                            <div className="side-menu__icon"> <i data-lucide="file-text"></i> </div>
                            <div className="side-menu__title">
                                Professionals 
                            </div>
                        </Link>
                    </li>

                    <li className="side-nav__devider my-6"></li>
                   
                    <li>
                         <Link href="/admin/schools/indexing" className={exactPath.includes('/admin/schools/indexing')  ? "side-menu side-menu--active" : 'side-menu'} >
                            <div className="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="side-menu__title"> Indexing Department</div>
                        </Link>
                    </li>
                   
                    <li>
                         <Link href="/admin/schools/examination" className={exactPath.includes('/admin/schools/examination')  ? "side-menu side-menu--active" : 'side-menu'} >
                            <div className="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="side-menu__title"> Examination Department </div>
                        </Link>
                    </li>

                    <li className="side-nav__devider my-6"></li>
                
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