import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ApiStateHandler = (isPending:boolean, isError:boolean, error:any) =>{
    if(isError){
        return(
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            })
        )
    }
   
}

export default ApiStateHandler