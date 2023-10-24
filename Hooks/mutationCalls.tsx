import {useMutation} from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const mutationCall = (service) => {

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: service,
        onSuccess: () => {

        }
    })

    const handleSubmit = (formData) =>{
        mutate({formData})
    }
    return(
        
        <ToastContainer />
    )
}
