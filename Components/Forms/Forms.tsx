import GenericForm, {Field, FormValues} from "@/UI/genericForm"

export const Fields:Field = {
    loginFormFields: [
        {name:'username', type:'text', label:'Username', required:true},
        {name:'password', type:'password', label:'Password', required:true}
    ],
    forgetPwdFormFields: [
        {name:'email', type:'text', label:'Email', required:true},
    ],
    professionalFormFields: [
        {name:'code', type:'text', label:'Registeration Code', required:true},
        {name:'email', type:'email', label:'Email', required:true},
        {name:'programme', type:'select', label:'Programme', 
            options: [
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician'},
                {values:'Dental Therapist', label:'Dental Therapist'},
                {values:'Dental Surgery Assistant', label:'Dental Surgery Assistant'},
                {values:'Dental Nurse', label:'Dental Nurse'}
            ], required:true
        },
        {name:'password', type:'password', label:'Password', required:true},
        {name:'confirmPwd', type:'password', label:'Confirm Password', required:true},
        {name:'is_professional', type:'hidden', label:'Is Professional', isHidden:true},
    ],
    schoolFormFields: [
        {name:'schCode', type:'text', label:'School Code', required:true},
        {name:'schName', type:'text', label:'School Name', required:true},
        {name:'email', type:'email', label:'Email', required:true},
        {name:'phone', type:'text', label:'Phone Number', required:true},
       
        {name:'password', type:'password', label:'Password', required:true},
        {name:'confirmPwd', type:'password', label:'Confirm Password', required:true},
        {name:'programme', type:'multiselect', label:'Programme', 
            options: [
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician', name:'Dental Surgery Technician'},
                {values:'Dental Therapist', label:'Dental Therapist', name:'Dental Therapist'},
                {values:'Dental Surgery Assistant', label:'Dental Surgery Assistant', name:'Dental Surgery Assistant'},
                {values:'Dental Nurse', label:'Dental Nurse', name:'Dental Nurse'}
            ], required:true
        },
        {name:'is_professional', type:'hidden', label:'Is Professional', isHidden:true}, 
    ],
    resetPwdFields: [
        {name:'new_password', type:'password', label:'New Password', required:true},
        {name:'confirm_password', type:'password', label:'Confirm Password', required:true}
    ]
}