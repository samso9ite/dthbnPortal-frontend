import { Fields } from "@/Components/Forms/Forms"
import GenericForm from "@/UI/genericForm"

const ProfileForm = () => {
    const submitHandler = () => {
        
    }
    return(
        <>
            <GenericForm fields={Fields.indexingProfileFields} onSubmit={submitHandler} span6={true} />
        </>
    )
}

export default ProfileForm