import Modal from "react-responsive-modal"

const SchoolDetails:React.FC<{data:any ,modalIsOpen:boolean, onCloseModal:() => void}> = (props) => {
    return(
        <Modal 
            open={props.modalIsOpen}
            onClose={props.onCloseModal}>

               <h1>Checking hwrw</h1> 
            

        </Modal>
    )
}

export default SchoolDetails