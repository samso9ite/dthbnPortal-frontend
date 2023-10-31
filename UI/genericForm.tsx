import CustomSelect, { customMultipleSelect } from "./customSelect";
import {useEffect, useState} from 'react'
import Multiselect from 'multiselect-react-dropdown';

type Field = {
    name:string;
    type:string;
    options?: {label:string, value:string, }[];
    label: string;
    isHidden?:boolean
}

type FormValues = {
    [key: string]: string | undefined    
}

type Props = {
    fields: Field[];
    onSubmit: (values: FormValues) => void;
    initialValues?: FormValues
}

const GenericForm:React.FC<Props> = ({fields, onSubmit, initialValues})  => {
    const [values, setValues] = useState<FormValues>(initialValues || {});
    
    // This updates the initial values on form change
    useEffect(() => {
        setValues(initialValues || {})
    }, [initialValues])
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setValues((prevValues) => ({
            ...prevValues, [name]:value,
        }))
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSubmit(values)
    }
    return(
        <form onSubmit={handleSubmit}>
            {fields.map((field) => {
                const { name, type, options, label , isHidden } = field;
                if(isHidden){
                    return (
                        <input
                        key={name}
                        type="hidden"
                        name={name}
                        value={values[name] || ''}
                      />
                    )
                }

                return(
                    <div key={name}>
                        {type === 'text' ? (
                            <input
                                className="intro-x login__input form-control py-3 px-4 block mt-4"
                                type="text"
                                name={name}
                                placeholder={label}
                                value={values[name] || ''}
                                onChange={handleChange}
                            />
                        ) : type === 'select' && options ? (
                            <select name={name} value={values[name] || ''} className="form-select form-select-lg  sm:mr-2 mt-4" 
                                onChange={handleChange}>
                                {options.map((option) => (  
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ): type === 'radio' ? (
                            <input type="radio" name={name} value={values[name] || ''} onChange={handleChange} />
                        ):
                    
                        <Multiselect className='mt-4'
                            options={options} 
                            selectedValues={values[name] || ''} 
                            displayValue={name}
                        />
                    }
                    </div>
                )
            })}
            <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top mt-4" type="submit">Submit</button>
            </form>   
        )

    }

export default GenericForm