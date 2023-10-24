const TopBar = () => {
    return(
        <>
             <div className="top-bar">
            <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Application</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>
           
            <div className="intro-x relative mr-3 sm:mr-6">
                <div className="search hidden sm:block">
                    <input type="text" className="search__input form-control border-transparent" placeholder="Search..." />
                    <i data-lucide="search" className="search__icon dark:text-slate-500"></i> 
                </div>
                <a className="notification sm:hidden" href=""> <i data-lucide="search" className="notification__icon dark:text-slate-500"></i> </a>
                <div className="search-result">
                    <div className="search-result__content">
                        <div className="search-result__content__title">Pages</div>
                        <div className="mb-5">
                            <a href="" className="flex items-center">
                                <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="inbox"></i> </div>
                                <div className="ml-3">Mail Settings</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="users"></i> </div>
                                <div className="ml-3">Users & Permissions</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="credit-card"></i> </div>
                                <div className="ml-3">Transactions Report</div>
                            </a>
                        </div>
                        <div className="search-result__content__title">Users</div>
                        <div className="mb-5">
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg" />
                                </div>
                                <div className="ml-3">Kevin Spacey</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">kevinspacey@left4code.com</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg" />
                                </div>
                                <div className="ml-3">Johnny Depp</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">johnnydepp@left4code.com</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg" />
                                </div>
                                <div className="ml-3">Johnny Depp</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">johnnydepp@left4code.com</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-9.jpg" />
                                </div>
                                <div className="ml-3">Morgan Freeman</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">morganfreeman@left4code.com</div>
                            </a>
                        </div>
                        <div className="search-result__content__title">Products</div>
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-9.jpg" />
                            </div>
                            <div className="ml-3">Oppo Find X2 Pro</div>
                            <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Smartphone &amp; Tablet</div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg" />
                            </div>
                            <div className="ml-3">Nikon Z6</div>
                            <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Photography</div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-2.jpg" />
                            </div>
                            <div className="ml-3">Sony Master Series A9G</div>
                            <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Electronic</div>
                        </a>
                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-8.jpg" />
                            </div>
                            <div className="ml-3">Dell XPS 13</div>
                            <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="intro-x dropdown mr-auto sm:mr-6">
                <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i> </div>
                <div className="notification-content pt-2 dropdown-menu">
                    <div className="notification-content__box dropdown-content">
                        <div className="notification-content__title">Notifications</div>
                        <div className="cursor-pointer relative flex items-center ">
                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg" />
                                <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
                                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                </div>
                                <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg" />
                                <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">Johnny Depp</a> 
                                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                </div>
                                <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg" />
                                <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">Johnny Depp</a> 
                                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                </div>
                                <div className="w-full truncate text-slate-500 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-9.jpg" />
                                <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">Morgan Freeman</a> 
                                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                </div>
                                <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-1.jpg" />
                                <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">Denzel Washington</a> 
                                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">03:20 PM</div>
                                </div>
                                <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-x dropdown w-8 h-8">
                <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                    <img alt="Midone - HTML Admin Template" src="dist/images/profile-5.jpg" />
                </div>
                <div className="dropdown-menu w-56">
                    <ul className="dropdown-content bg-primary text-white">
                        <li className="p-2">
                            <div className="font-medium">Kevin Spacey</div>
                            <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">Software Engineer</div>
                        </li>
                        <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li>
                        <li>
                            <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile </a>
                        </li>
                        <li>
                            <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                        </li>
                        <li>
                            <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                        </li>
                        <li>
                            <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li>
                        <li>
                            <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopBar