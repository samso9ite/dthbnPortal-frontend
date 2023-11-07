import { useMutation, useQuery } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

export const useCustomMutation = (service:any, onSuccess: () => void): {
    handleSubmit: (formData: any) => void;
    isPending: boolean;
    isSuccess:boolean;
    isError: boolean;
    error: any;
    data: any
  } => {
    const { mutate, isPending, isError, error, isSuccess, data } = useMutation({
        mutationFn: service,
        onSuccess: onSuccess
    }); 
    const handleSubmit = (formData:any) =>{
        mutate(formData)
    }
    return {
        handleSubmit,
        isPending,
        isError,
        error,
        isSuccess,
        data
    };
}

export const useCustomQuery = (service: any, key:any):{  
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    error:any;
    data:any
} => {
    const {isPending, isSuccess, isError, error, data} = useQuery({
        
        queryKey: [key],
        queryFn: service,
        staleTime: 5000,
    })
    return{
        isPending,
        isSuccess,
        isError,
        error,
        data
    };
}