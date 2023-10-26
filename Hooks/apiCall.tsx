import { useMutation, useQuery } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

// type ServiceFunctionType = (formData: any) => Promise<any>
export const useCustomMutation = (service:any, onSuccess: () => void): {
    handleSubmit: (formData: any) => void;
    isPending: boolean;
    isSuccess:boolean;
    isError: boolean;
    error: any;
  } => {
    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationFn: service,
        onSuccess: onSuccess
    });
    const handleSubmit = (formData:any) =>{
        mutate(formData)
        console.log(isPending);
        console.log(isSuccess);
        
    }
    return {
        handleSubmit,
        isPending,
        isError,
        error,
        isSuccess
    };
}

export const useCustomQuery = () => {

}