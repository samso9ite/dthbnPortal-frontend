import { examinationActions,stepperState as examStepperState } from "@/store/examination-slice"
import { indexingActions, stepperState as indexingStepperState } from "@/store/indexing-slice"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const Button:React.FC = () =>{
    const router = useRouter()
    // const[stepper, setStepper] = useState<string>('')
    let indexingStepper = useSelector(indexingStepperState)
    let examStepper = useSelector(examStepperState)
    const dispatch = useDispatch()
    let stepper:string = ''
    const onPrevious = () => {
        if (router.pathname.includes('/indexing')){
            stepper = indexingStepper
            // setStepper(indexingStepper)
            if(stepper == 'work') {
                dispatch(indexingActions.switchState('profile'))
            }else if(stepper == 'sch/cert'){
                dispatch(indexingActions.switchState('work'))
            }else if(stepper == 'referee'){
                dispatch(indexingActions.switchState('sch/cert'))
            }else if(stepper == 'sch/cert'){
                dispatch(indexingActions.switchState('referee'))
            }else if(stepper == 'result'){
                    dispatch(indexingActions.switchState('referee'))
            }else if(stepper == 'secondResult'){
                dispatch(indexingActions.switchState('result'))
            } else(
                dispatch(indexingActions.switchState('profile'))
            )
        }else  if (router.pathname.includes('/exam')){
            // console.log(stepper);
            // setStepper(examStepper)
            stepper = examStepper
            if(stepper == 'work') {
                dispatch(examinationActions.switchState('profile'))
            }else if(stepper == 'sch/cert'){
                dispatch(examinationActions.switchState('work'))
            }else if(stepper == 'referee'){
                dispatch(examinationActions.switchState('sch/cert'))
            }else if(stepper == 'sch/cert'){
                dispatch(examinationActions.switchState('referee'))
            }else if(stepper == 'result'){
                    dispatch(examinationActions.switchState('referee'))
            }else(
                dispatch(examinationActions.switchState('profile'))
            )
        }
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