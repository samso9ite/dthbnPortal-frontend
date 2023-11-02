import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ApiStateHandler = (isPending:boolean, isError:boolean, error:any,
    apiStatusHandler: (statusData:boolean) => void) =>{
        if(isError){
            return(
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "light",
                    onOpen: () =>apiStatusHandler(false)
                }
                
                )
            )     
        }
        // if(isSuccess){
        //     return(
        //         toast.success("Request Sent", {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             theme: "light",
        //             onOpen: () =>apiStatusHandler(false)
        //         }
                
        //         )
        //     )     
        // }
        
    }

export default ApiStateHandler
