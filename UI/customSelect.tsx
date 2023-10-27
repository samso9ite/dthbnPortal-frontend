const CustomSelect = (name:string, value:any, options:[], onChange:() => void) => {
    return(
        <select name={name} value={value} onChange={onChange}>  
            {options.map((option:any) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default CustomSelect