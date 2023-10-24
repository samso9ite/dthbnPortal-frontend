const SideNav = () => {
    return ( 
        <>
             <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Dental Board of Nigeria" className="w-6" src="src/images/logo_dental.png" />
                    <span className="hidden xl:block text-white text-lg ml-3"> Dental Board Sch </span> 
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <a href="index.html" className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Dashboard 
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="file-text"></i> </div>
                            <div className="side-menu__title">
                                Indexing 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="current_indexing.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Current Index Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="index.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Submitted Index Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="simple-menu-light-dashboard-overview-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Approved Index Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="top-menu-light-dashboard-overview-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Declined Index Record </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="menu__icon"> <i data-lucide="edit"></i> </div>
                            <div className="side-menu__title">
                                Examination 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-categories.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Current Exam Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-add-product.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Submitted Exam Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title">
                                        Approved Inndex Record 
                                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title">
                                        Delined Index Record
                                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                            </li>
                           
                        </ul>
                    </li>

                    <li className="side-nav__devider my-6"></li>
                    <li>
                        <a href="side-menu-light-inbox.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="user-plus"></i> </div>
                            <div className="side-menu__title"> Pre-register Student </div>
                        </a>
                    </li>
                    <li>
                        <a href="code_generation.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="plus-square"></i> </div>
                            <div className="side-menu__title"> Generate Code     </div>
                        </a>
                    </li>
                   
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

                    <li>
                        <a href="menu-light-chat.html" className="menu">
                            <div className="menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="menu__title"> Whatsapp Support 2 </div>
                        </a>
                    </li>
                   
                    <li className="side-nav__devider my-6"></li>
                
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="trello"></i> </div>
                            <div className="side-menu__title">
                                Profile 
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:;" className="side-menu">
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