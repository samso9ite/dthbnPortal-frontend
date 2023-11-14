import { Fields } from "@/Components/Forms/Forms"
import GenericForm from "@/UI/genericForm"

const RefereeForm = () => {

    const submitHandler = () => {

    }
    
    return (
        <>
            <GenericForm fields={Fields.indexingRefereeDetails} onSubmit={submitHandler} 
                span6={true} stepperForm={true} />
        </>
    )
}

export default RefereeForm