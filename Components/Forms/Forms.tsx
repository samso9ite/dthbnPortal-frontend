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
    ],
    // New Indexng Form
    indexingProfileFields: [
        {name: 'institution_name', type:'text', label:'Institution', required:true},
        {name: 'first_name', type:'text', label:'First Name', required:true}, 
        {name: 'middle_name', type:'text', label:'Middle Name', required:true},
        {name: 'last_name', type:'text', label:'Last Name', required:true},
        {name: 'cadre', type:'select', label:'Cadre', required:true,
            options: [
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician', name:'Dental Surgery Technician'},
                {values:'Dental Therapist', label:'Dental Therapist', name:'Dental Therapist'},
                {values:'Dental Surgery Assistant', label:'Dental Surgery Assistant', name:'Dental Surgery Assistant'},
                {values:'Dental Nurse', label:'Dental Nurse', name:'Dental Nurse'}
            ],
        },
        {name: 'gender', type:'select', label:'Gender', required:true,
            options: [
                {values:'Male', label:'Male'},
                {values:'Female', label:'Female'}
            ]
        },
        {name: 'age', type:'number', label:'Age', required:true},
        {name: 'telephone', type:'text', label:'Telephone', required:true},
        {name: 'email', type:'email', label:'Email', required:true},
        {name: 'nationality', type:'text', label:'Nationality', required:true},
        {name: 'state', type:'text', label:'State of Origin', required:true},
        {name: 'lga', type:'text', label:'Local Government Area', required:true},
        {name: 'marital_status', type:'select', label:'Marital Status', required:true,
            options: [
                {values:'Single', label:'Single'},
                {values:'Married', label:'Married'},
                {values:'Divorced', label:'Divorced'}
            ]
        },
        {name: 'marriage_cert', type:'file', label:'Marriage Certificate', required:false},
        {name: 'permanent_address', type:'text', label:'Permanent Address', required:false}
    ],

    indexingWorkFields: [
        {name: 'place_of_work', type:'text', label:'Place of Work', required:true},
        {name: 'address', type:'text', label:'Address', required:true},
        {name: 'position', type:'text', label:'Position', required:true},
    ],
    indexingRefereeFields: [
        {name: 'referee_name', type:'text', label:'Referee Name', required:true},
        {name: 'referee_number', type:'number', label:'Referee Number', required:true},
        {name: 'referee_address', type:'text', label:'Referee Address', required:true},
    ],
    indexingSchFields:[
        {name: 'sch_attended', type:'text', label:'School Attended'},
        {name: 'entry-graduation_date', type:'date', label:'Entry & Graduation Date', required:true},
        {name: 'qualification', type:'text', label:'Qualification', required:true},
        {name: 'upload_certificaate', type:'file', label:'Upload Certificate'}
    ],
    indexingResultFields: [
        {name: 'exam_number', type:'text', label:'Exaination Number', required:true},
        {name: 'exam_type', type:'select', label:'Examination Type', required:true,
            options: [
                {value:'WASSCE', label:'WAEC'},
                {value:'GCE', label:'GCE'},
                {value:'NECO', label:'NECO'},
                {value:'NABTEB', label:'NABTEB'}
            ]
        },
        {name: 'exam_year', type:'text', label:'Examination Year', required:true},
        {name: 'subject', type:'text', label:'Subject', required:true},
        {name: 'grade', type:'select', label:'grade', required:true,
            options: [
                {value:'A1', label:'A1'},
                {value:'B2', label:'B2'},
                {value:'B3', label:'B3'},
                {value:'C4', label:'C4'},
                {value:'C5', label:'C5'},
                {value:'C6', label:'C6'},
                {value:'D7', label:'D7'},
                {value:'E8', label:'E8'},
                {value:'F9', label:'F9'},
            ]
        },
    ]
}