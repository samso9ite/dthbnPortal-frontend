const MobileNav = () => {
    return(
        <>
            <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href="" className="flex mr-auto">
                    <img alt="Dthbn Logo" className="w-6" src="src/images/dthbn_logo.png" />
                </a>
                <a href="javascript:;" className="mobile-menu-toggler"> <i data-lucide="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
            </div>
            <div className="scrollable">
                <a href="javascript:;" className="mobile-menu-toggler"> <i data-lucide="x-circle" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
                
                <ul  className="scrollable__content py-2">
                    <li>
                        <a href="javascript:;.html" className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Dashboard  </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-lucide="file-text"></i> </div>
                            <div className="menu__title">
                                Indexing 
                                <div className="menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="index.html" className="menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title"> Current Index Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="index.html" className="menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title"> Submitted Index Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="simple-menu-light-dashboard-overview-1.html" className="menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title"> Approved Index Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="top-menu-light-dashboard-overview-1.html" className="menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title"> Declined Index Record </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-lucide="edit"></i> </div>
                            <div className="menu__title">
                                Examination 
                                <div className="menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="menu-light-categories.html" className="menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title"> Current Exam Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="menu-light-add-product.html" className="menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title"> Submitted Exam Record </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title">
                                        Approved Inndex Record 
                                        <div className="menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="menu__title">
                                        Delined Index Record
                                        <div className="menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                            </li>
                           
                        </ul>
                    </li>

                    <li className="nav__devider my-6"></li>
                    <li>
                        <a href="menu-light-inbox.html" className="menu">
                            <div className="menu__icon"> <i data-lucide="user-plus"></i> </div>
                            <div className="menu__title"> Pre-register Student </div>
                        </a>
                    </li>
                    <li>
                        <a href="code_generation.html" className="menu">
                            <div className="menu__icon"> <i data-lucide="plus-square"></i> </div>
                            <div className="menu__title"> Generate Code     </div>
                        </a>
                    </li>
                    <li>
                        <a href="menu-light-chat.html" className="menu">
                            <div className="menu__icon"> <i data-lucide="message-square"></i> </div>
                            <div className="menu__title"> Whatsapp Chat </div>
                        </a>
                    </li>
                   
                    <li className="nav__devider my-6"></li>
                
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-lucide="trello"></i> </div>
                            <div className="menu__title">
                                Profile 
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-lucide="power"></i> </div>
                            <div className="menu__title">
                                Logout 
                            </div>
                        </a>
                    </li>
              
                </ul>

            
            </div>
        </div>
        </>
    )
}

export default MobileNav