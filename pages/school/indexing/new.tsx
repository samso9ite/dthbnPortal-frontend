import { useSelector, useDispatch } from "react-redux"
import {useState, useCallback, useEffect} from 'react'
import { indexingActions, stepperState } from "@/store/indexing-slice"
import IndexingForm from "@/Components/School/Indexing/IndexingForm"

const { default: MainLayout } = require("@/Layout/MainLayout")

const NewIndexing = () => {
    const [formState, setFormState] = useState('profile')
    const dispatch = useDispatch()
    let stepper = useSelector(stepperState)
    dispatch(indexingActions.switchState('result'))
    // console.log(stepper);
    
    return (
        <MainLayout>
            <h2 className="intro-y text-lg font-medium mt-10">
               Create New Indexing 
            </h2>
            <div className="intro-y box py-10 sm:py-20 mt-5">
                <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                        <button className="w-10 h-10 rounded-full btn btn-primary">1</button>
                        <div className={stepper == 'profile' ? "lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto" : 
                        "lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"}>Profile Details</div>
                    </div>
                    <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                        <button className={stepper == 'work' || stepper == 'referee' || stepper == 'result' ? "w-10 h-10 rounded-full btn btn-primary" :
                         "w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"}>2</button>
                        <div className={stepper == 'work' ? "lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto" : 
                        "lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"}>Work Details</div>
                    </div>
                    <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                        <button className={stepper == 'referee' || stepper == 'result' ? "w-10 h-10 rounded-full btn btn-primary" :
                         "w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"}>3</button>
                        <div className={stepper == 'referee' ? "lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto" : 
                        "lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"}>Referee Details</div>
                    </div>
                    <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                        <button className={stepper == 'result' ? "w-10 h-10 rounded-full btn btn-primary" :
                         "w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"}>3</button>
                        <div className={stepper == 'result' ? "lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto" : 
                        "lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"}>Result Details</div>
                    </div>
                  
                </div>
                <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
                    <IndexingForm />
                </div>
            </div>
        </MainLayout>
    )
}

export default NewIndexing