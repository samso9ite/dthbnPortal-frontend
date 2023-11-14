import { Fields } from "@/Components/Forms/Forms"
import GenericForm from "@/UI/genericForm"

const ResultForm = () => {

    const submitHandler = () => {

    }
    
    return (
        <>
            <GenericForm fields={Fields.indexingWorkDetails} onSubmit={submitHandler} 
                span6={true} stepperForm={true} />
        </>
    )
}

export default ResultForm