import GenericForm, {Field, FormValues} from "@/UI/genericForm"

export const Fields:Field = {
    loginFormFields: [
        {name:'email', type:'text', label:'Email'},
        {name:'password', type:'text', label:'Password'}
    ],
    professionalFormFields: [
        {name:'regCode', type:'text', label:'Registeration Code'},
        {name:'email', type:'text', label:'Email'},
        {name:'programme', type:'select', label:'Programme', 
            options: [
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician'},
                {values:'Dental Therapist', label:'Dental Therapist'},
                {values:'Dental Surgery Assistant', label:'Dental Surgery Assistant'},
                {values:'Dental Nurse', label:'Dental Nurse'}
            ]
        },
        {name:'password', type:'text', label:'Password'},
        {name:'confirmPwd', type:'text', label:'Confirm Password'}
    ],
    schoolFormFields: [
        {name:'schCode', type:'text', label:'School Code'},
        {name:'schName', type:'text', label:'School Name'},
        {name:'email', type:'text', label:'Email'},
        {name:'phone', type:'text', label:'Phone Number'},
       
        {name:'password', type:'text', label:'Password'},
        {name:'confirmPwd', type:'text', label:'Confirm Password'},
        {name:'programme', type:'', label:'Programme', 
        options: [
            {values:'Dental Surgery Technician', label:'Dental Surgery Technician', name:'Dental Surgery Technician'},
            {values:'Dental Therapist', label:'Dental Therapist', name:'Dental Therapist'},
            {values:'Dental Surgery Assistant', label:'Dental Surgery Assistant', name:'Dental Surgery Assistant'},
            {values:'Dental Nurse', label:'Dental Nurse', name:'Dental Nurse'}
        ]
    }
    ]
}