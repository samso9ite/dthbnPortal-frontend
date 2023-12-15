import apiRequest from "@/APIs/ApiRequests";
import { useCustomMutation } from "@/Hooks/apiCall";
import { FormValues } from "@/UI/genericForm";
import ApiStateHandler from "@/util/ApiStateHandler";
import TitleCase from "@/util/TitleCase";
import Modal from "react-responsive-modal"
import 'react-responsive-modal/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SchoolDetails:React.FC<{data:any, modalIsOpen:boolean, onCloseModal:() => void}> = (props) => {

    const restrictionHandler = (type:string) => {
        apiRequest.userRestriction(props.data.User.id, type)
        .then(res => {
            props.onCloseModal

            toast(res?.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })       
    }

    // const deleteUserHandler= () => {
    //     apiRequest.deleteAccount(props.data.User.id)
    //     .then(res => {
    //         props.onCloseModal

    //         toast(res?.data.message, {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             });
    //     })       
    // }

    return(
        <>
        <Modal 
            open={props.modalIsOpen}
            onClose={props.onCloseModal}>

            <div className="intro-y box px-5 pt-5 mt-5" >
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                        <div className="flex  px-5 items-center justify-center lg:justify-start">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                                <img alt="Midone - HTML Admin Template" className="rounded-full" src={props.data.User.school_logo !== null ? props.data.User.school_logo : "dist/images/preview-12.jpg"} />
                                <div className="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"> <i className="w-4 h-4 text-white" data-lucide="camera"></i> </div>
                            </div>
                            <div className="ml-5">
                                <div className=" truncate sm:whitespace-normal font-medium text-lg"><TitleCase text={props.data.User.username} /></div>
                                <div className="text-slate-500 font-medium" >Registeration Number: {props.data.User.code}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    
                    <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                        <div className="font-medium text-center lg:text-left lg:mt-3"> <b>School Details</b></div>
                        <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center"> <b>Address: </b><TitleCase text={props.data.address} /></div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Email: </b> { props.data.User.email} </div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone Number: </b> {props.data.User.phone_number}</div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Postal Adress: </b> {props.data.postal_number} </div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>State: </b> <TitleCase text={props.data.state} /></div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Region: </b> <TitleCase text={props.data.region} /> </div>
                        </div>

                        <br />
                        <div className="font-medium text-center lg:text-left lg:mt-3"> <b>HOD  Details</b></div>
                        <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center"> <b>Name: </b> <TitleCase text={props.data.hod_name} /></div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Phone Number: </b> {props.data.hod_phone}</div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <b>Email: </b> {props.data.hod_email} </div>
                        </div>
                    </div>
               
                </div>
                <div className="row mt-3">
                <button className="btn btn-primary" style={{marginRight:"20px"}} 
                    onClick={() => restrictionHandler(props.data.User.block == true ? 'unblock' : 'block')}>
                        {props.data.User.block == true ? 'Unblock' : 'Block'}
                </button> 
                <button className="btn btn-warning" style={{marginRight:"20px"}} 
                    onClick={() => restrictionHandler(props.data.User.suspend == true ? 'unsuspend' : 'suspend')}>
                    {props.data.User.suspend == true ? 'Unsuspend' : 'Suspend'}
                </button>
                <button className="btn btn-danger" onClick={() => restrictionHandler('delete')}>Delete</button>
                </div>
                </div>
        </Modal>
        <ToastContainer />
        </>
    )
}

export default SchoolDetails