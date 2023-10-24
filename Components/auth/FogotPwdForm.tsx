const ForgotPasswordForm = () => {
    return(
        <>
            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Reset Password
            </h2>
            <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">Input your registered email address to retrieve your password</div>
            <div className="intro-x mt-8">
                <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="Email" />
            </div>
        </>
    )
}

export default ForgotPasswordForm