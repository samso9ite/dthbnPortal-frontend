import { indexingActions, stepperState } from "@/store/indexing-slice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Button:React.FC = () =>{
    let stepper = useSelector(stepperState)
    const dispatch = useDispatch()
    const onPrevious = () => {
        if(stepper == 'work') {
            dispatch(indexingActions.switchState('profile'))
        }else if(stepper == 'referee'){
            dispatch(indexingActions.switchState('work'))
        }else if(stepper == 'result'){
            dispatch(indexingActions.switchState('referee'))
        } else(
            dispatch(indexingActions.switchState('profile'))
        )
    }

    return(
        <>
            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                <span className="mr-4" style={{fontWeight:'600'}} onClick={onPrevious}> <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Previous</span>
                <button className="btn btn-primary w-30 pr-5 ml-2" type="submit">Save & Next</button>
            </div>
        </>
    )
} 

export default Button