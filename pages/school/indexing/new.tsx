import ProfileForm from "@/Components/School/Indexing/profileForm"

const { default: MainLayout } = require("@/Layout/MainLayout")

const NewIndexing = () => {
    return (
        <MainLayout>
            <h2 className="intro-y text-lg font-medium mt-10">
               Create New Indexing 
            </h2>
            <div className="intro-y box py-10 sm:py-20 mt-5">
                <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                        <button className="w-10 h-10 rounded-full btn btn-primary">1</button>
                        <div className="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">Profile Details</div>
                    </div>
                    <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                        <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">2</button>
                        <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">Work Details</div>
                    </div>
                    <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                        <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">3</button>
                        <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">Referee Details</div>
                    </div>
                    <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                        <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">3</button>
                        <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">Result Details</div>
                    </div>
                  
                </div>
                <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
                    <div className="font-medium text-base">Profile Settings</div>
                       <ProfileForm />
                        
                        <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                            <button className="btn btn-secondary w-24">Previous</button>
                            <button className="btn btn-primary w-24 ml-2">Next</button>
                        </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default NewIndexing