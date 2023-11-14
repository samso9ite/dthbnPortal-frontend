const Button:React.FC = () =>{
    return(
        <>
            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                <button className="btn btn-secondary w-24">Previous</button>
                <button className="btn btn-primary w-30 ml-2" type="submit" >Save & Next</button>
            </div>
        </>
    )
} 

export default Button