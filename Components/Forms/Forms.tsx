import GenericForm, { FormValues} from "@/UI/genericForm"


type Field = {
    name:string;
    type:string;
    options?: {label:string, value:string, }[];
    label: string;
    required?:boolean;
    stepperForm?:true
}
const subjectOptions =   [
    {value:'', label:'Select Subject'},
    {value:'Mathematics', label:'Mathematics'},
    {value:'English', label:'English'},
    {value:'Physics', label:'Physics'},
    {value:'Chemistry', label:'Chemistry'},
    {value:'Biology', label:'Biology'},
    {value:'Further Mathematics', label:'Further Mathematics'},
    {value:'C.R.K', label:'C.R.K'},
    {value:'Civic Education', label:'Civic Education'},
    {value:'Agricultural Science', label:'Agricultural Science'},
    {value:'Economics', label:'Economics'},
    {value:'Islamic Studies', label:'Islamic Studies'},
]

const gradeOptions = [
    {value:'', label:'Select Grade'},
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

const generateFields = (count:number, name:string, field:string, options?:any,) => {
    
    const generatedFields = Array.from({length:count}, (_, index) => ({
        name: `${name}_${index + 1}`,
        type: options ? 'select' : 'text',
        label: `${field} ${index + 1}`, 
        required: false,
        options: options
        
    }))
    return generatedFields;
    
}

const generatedSubjectFields = generateFields(7, 'sub',  'Subject', subjectOptions);
const generatedGradeFields = generateFields(7, 'grade', 'Grade' , gradeOptions);
const generatedSchField = generateFields(3, 'school_attended', 'School Attended');
const generatedCertField = generateFields(3,'qualification', 'Qualification');
const generatedEntry_GradYear = generateFields(3,'admission_grad_year', 'Admission & Graduation Year (2000 -2003)')

export const Fields:any = {
    loginFormFields: [
        {name:'email', type:'email', label:'Email', required:true},
        {name:'password', type:'password', label:'Password', required:true}
    ],
    forgetPwdFormFields: [
        {name:'email', type:'text', label:'Email', required:true},
    ],
    professionalFormFields: [
        {name:'code', type:'text', label:'License Number', required:true},
        {name:'username', type:'disabled', label:'Name', required:true},
        {name:'programme', type:'select', label:'Programme', 
            options: [
                {value:'', label:'Select Cadre'},
                {values:'Dental Therapist/Officer', label:"Dental Therapist/Officer"},
                {values:'Dental Surgery Assistance', label:'Dental Surgery Assistance'},
            ], required:true
        },
        {name:'email', type:'email', label:'Email', required:true},
        {name:'password', type:'password', label:'Password', required:true},
        {name:'confirmPwd', type:'password', label:'Confirm Password', required:true},
        {name:'is_professional', type:'hidden', label:'Is Professional', isHidden:true},
    ],
    profProfileFields: [
        {name:'title', type:'select', label:"Title", required:true,
            options: [
                {value:'', label: "Select Title"},
                {value:'Mrs.', label:"Mrs."},
                {value: "Miss", label: "Miss"},
                {value: "Mr.", label: "Mr."}
            ]
        },
        {name:'first_name', type:'text', label:"First Name", required:true},
        {name:'middle_name', type:'text', label:"Middle Name", required:true},
        {name:'surname', type:'text', label:"Last Name", required:true},
        {name:'telephone', type:'text', label:'Phone Number', required:true},
        {name:'email', type:'email', label:'Active Email', required:true},
        {name:'date_of_birth', type:'text', label:"Date of Birth", required:true},
        {name:'religion', type:'select', label:"Religion", required:true,
            options: [
                {value:'', label: "Select Religion"},
                {value:'Christian', label:"Christian"},
                {value: "Muslim", label: "Muslim"},
                {value: "Others", label: "Others"}
            ]
        },
        {name:'marital_status', type:'select', label:"Marital Status", required:true,
            options: [
                {value:'', label: "Select Marital Status"},
                {value:'Single', label:"Single"},
                {value: "Married", label:"Married"},
                {value: "Divorced", label:"Divorced"}
            ]
        },
       
        {name:'residential_address', type:'text', label:'Residential Address', required:true},
        {name:'postal_address', type:'text', label:'Postal Address', required:false},
        {name:'profile_image', type:'file', label:'Passport Photo', required:true},
        
    ],
    profWorkFields: [
        {name:'employment_status', type:'select', label:'Employment Status', required:true, 
            options: [
                {value:'', label:'Select Employment Status'},
                {values:'Employed', label:"Employed"},
                {values:'Unemployed', label:'unemployed'},
            ],
        },  
        {name:'office_name', type:'text', label:'Name of Place of Work', required:false},
        {name:'office_address', type:'text', label:'Address of Place of Work', required:false},
        {name:'office_country', type:'text', label:'Country of Place of Work ', required:false},
        {name:'office_state', type:'text', label:'State of Place of Work ', required:false},
        {name:'office_lga', type:'text', label:'LGA of Place of Work ', required:false},
        {name:'office_phone', type:'text', label:'Phone number of Place of Work ', required:false},
        {name:'office_email', type:'text', label:'Official Email', required:false},
        {name:'department', type:'text', label:'Department', required:false},
        {name:'present_position', type:'text', label:'Present Position', required:false},
    ],
    profAcademicFields: [
        {name:'institution_1', type:'text', label:'Primary School', required:true},
        {name:'qualification1', type:'text', label:'Primary School Leaving Certificate', required:true},
        {name:'institution_2', type:'text', label:'Junior Secondary School', required:true},
        {name:'qualification2', type:'text', label:'Junior School Leaving Certificate', required:true},
        {name:'institution_3', type:'text', label:'Secondary School', required:true},
        {name:'qualification3', type:'text', label:'Secondary School Leaving Certificate', required:true},
        {name:'institution_4', type:'text', label:'Tertiary School', required:false},
        {name:'qualification4', type:'text', label:'Tertiary School Certificate', required:false},
        
    ],
    profContactFields: [
        {name:'senatorial_district', type:'text', label:'Senatorial District', required:false},
        {name:'residential_country', type:'text', label:'Residential Country', required:true},
        {name:'residential_state', type:'text', label:'Residential State', required:true},
        {name:'residential_lga', type:'text', label:'Residential LGA', required:true},
        {name:'state_of_birth', type:'text', label:'State of Birth', required:true},
        {name:'lga_of_birth', type:'text', label:'LGA of Birth', required:true},
    ],
    schoolFormFields: [
        {name:'code', type:'text', label:'School Code', required:true},
        {name:'username', type:'text', label:'School Name', required:true},
        {name:'programme', type:'multiselect', label:'Programme', 
            options: [
                {values:'Barchelor Dental Therapy(B.DTh)'},
                {values:'HND Dental Therapy'},
                {values:'HND Dental Surgery Assisting'},
                {values:'Dental Surgery Technician'}
            ], required:false
        },
        {name:'email', type:'email', label:'Email', required:true},
        {name:'phone', type:'text', label:'Phone Number', required:true},
        {name:'password', type:'password', label:'Password', required:true},
        {name:'confirmPwd', type:'password', label:'Confirm Password', required:true},
        {name:'is_professional', type:'hidden', label:'Is Professional', isHidden:true}, 
    ],
    resetPwdFields: [
        {name:'new_password', type:'password', label:'New Password', required:true},
        {name:'confirm_password', type:'password', label:'Confirm Password', required:true}
    ],


    // New Indexng Form
    indexingProfileFields: [
        // {name: 'institution_name', type:'text', label:'Institution', required:true},
        {name: 'first_name', type:'text', label:'First Name', required:true}, 
        {name: 'middle_name', type:'text', label:'Middle Name', required:false},
        {name: 'surname', type:'text', label:'Last Name', required:true},
        {name: 'cadre', type:'select', label:'Cadre', required:true,
            options: [
                {value:'', label:'Select Cadre'},
                {name:'Barchelor Dental Therapy(B.DTh)', values:'Barchelor Dental Therapy(B.DTh)', label:'Barchelor Dental Therapy(B.DTh)'},
                {values:'HND Dental Therapy', label:'HND Dental Therapy'},
                {values:'HND Dental Surgery Assisting', label:'HND Dental Surgery Assisting'},
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician'}
            ],
        },
        {name: 'sex', type:'select', label:'Gender', required:true,
            options: [
                {value:'', label:'Select Gender'},
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
        {name: 'religion', type:'text', label:'Religion', required:true},
        {name: 'marital_status', type:'select', label:'Marital Status', required:true,
            options: [
                {values:'', label:'Select Marital Status'},
                {values:'Single', label:'Single'},
                {values:'Married', label:'Married'},
                {values:'Divorced', label:'Divorced'}
            ]
        },
        {name: 'permanent_address', type:'text', label:'Permanent Address', required:false},
        {name: 'contact_address', type:'text', label:'Contact Address', required:false},
        {name:'profile_image', type:'file', label:'Passport Photo', required:false},
        {name: 'marriage_cert', type:'file', label:'Marriage Certificate', required:false},
       
    ],

    indexingWorkFields: [
        {name: 'place_of_work', type:'text', label:'Place of Work', required:false},
        {name: 'address', type:'text', label:'Address', required:false},
        {name: 'position', type:'text', label:'Position', required:false},
    ],
    indexingRefereeFields: [
        {name: 'referee_name', type:'text', label:'Referee Name', required:true},
        {name: 'referee_number', type:'number', label:'Referee Number', required:true},
        {name: 'referee_address', type:'text', label:'Referee Address', required:true},
    ],
    indexingResultFields: [
        {name: 'exam_number', type:'text', label:'Exaination Number', required:true},
        {name: 'exam_type', type:'select', label:'Examination Type', required:true,
            options: [
                {value:'', label:'Select Exam Type'},
                {value:'WASSCE', label:'WAEC'},
                {value:'GCE', label:'GCE'},
                {value:'NECO', label:'NECO'},
                {value:'NABTEB', label:'NABTEB'}
            ]
        },
        {name: 'exam_year', type:'text', label:'Examination Year', required:true},
        generatedSubjectFields,
        generatedGradeFields,
        {name:'o_level_cert', type:'file', label:'O Level Certificate', required:false}
    ],
    indexingSchCertDetails: [
        {name: 'school_attended_1', type:'text', label:'Primary School Attended', required:true},
        {name: 'qualification_1', type:'text', label:'Primary School Certificate', required:true},
        {name: 'admission_grad_year_1', type:'text', label:'Primary School Admission & Graduation Year(2000-2005)', required:true},
        {name: 'school_attended_2', type:'text', label:'Secondary School Attended', required:true},
        {name: 'qualification_2', type:'text', label:'Secondary School Certificate', required:true},
        {name: 'admission_grad_year_2', type:'text', label:'Secondary School Admission & Graduation Year(2000-2005)', required:true},
        {name: 'school_attended_3', type:'text', label:'Tertiary School Attended', required:true},
        {name: 'qualification_3', type:'text', label:' Tertiary School Certificate', required:true},
        {name: 'admission_grad_year_3', type:'text', label:'Tertiary School Admission & Graduation Year(2000-2005)', required:true},
        // generatedSchField,
        // generatedCertField,
        // generatedEntry_GradYear
    ],

    // New Examination Form
    examinationProfileFields: [
        // {name: 'institution_name', type:'text', label:'Institution', required:true},
        {name: 'title', type:'select', label:'Title', required:true,
        options: [
            {value:'', label:'Select Title'},
            {values:'Mr.', label:'Mr.'},
            {values:'Mrs.', label:'Mrs.'},
            {values:'Miss', label:'Miss'},
            {values:'Messrs', label: 'Messrs'}
        ],
    },
        {name: 'first_name', type:'text', label:'First Name', required:true}, 
        {name: 'middle_name', type:'text', label:'Middle Name', required:true},
        {name: 'surname', type:'text', label:'Last Name', required:true},
        {name: 'cadre', type:'select', label:'Cadre', required:true,
            options: [
                {value:'', label:'Select Cadre'},
                {values:'Barchelor Dental Therapy(B.DTh)', label:'Barchelor Dental Therapy(B.DTh)'},
                {values:'HND Dental Therapy', label:'HND Dental Therapy'},
                {values:'HND Dental Surgery Assisting', label:'HND Dental Surgery Assisting'},
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician'}
            ],
        },
        {name: 'gender', type:'select', label:'Gender', required:true,
            options: [
                {value:'', label:'Select Gender'},
                {values:'Male', label:'Male'},
                {values:'Female', label:'Female'}
            ]
        },
        {name: 'age', type:'number', label:'Age', required:true},
        {name: 'telephone', type:'text', label:'Telephone', required:true},
        {name: 'email', type:'email', label:'Email', required:true},
        {name: 'postal_address', type:'text', label:'Postal Address', required:false},
        {name: 'religion', type:'text', label:'Religion', required:true},
        {name: 'residential_country', type:'text', label:'Residential Country', required:true},
        {name: 'residential_state', type:'text', label:'Residential State', required:true},
        {name: 'residential_lga', type:'text', label:'Local Government Area', required:true},
        {name: 'residential_address', type:'text', label:'Residential Address', required:false},
        {name: 'marital_status', type:'select', label:'Marital Status', required:true,
            options: [
                {values:'', label:'Select Marital Status'},
                {values:'Single', label:'Single'},
                {values:'Married', label:'Married'},
                {values:'Divorced', label:'Divorced'}
            ]
        },
        {name: 'maiden_name', type:'text', label:'Maiden Name', required:false},
        {name: 'state_of_origin', type:'text', label:'State of Origin', required:true},
        {name: 'lga_state', type:'text', label:'Local Government Area', required:true},
        {name: 'senatorial_district', type:'text', label:'Senatorial District', required:true},
        {name: 'date_of_birth', type:'date', label:'Date of Birth', required:true},
        {name: 'state_of_birth', type:'text', label:'State of Birth', required:true},
        {name: 'lga_of_birth', type:'text', label:'Local Government Area', required:true},
        {name: 'mode_of_payment', type:'text', label:'Mode of Payment', required:true},
        {name:'profile_image', type:'file', label:'Profile Image', required:true},
    ],
    examinationWorkFields: [
        {name: 'office_name', type:'text', label:'Place of Work', required:true},
        {name: 'office_address', type:'text', label:'Address', required:true},
        {name: 'present_position', type:'text', label:'Position', required:true},
        {name: 'sector', type:'text', label:'Sector', required:true},
        {name: 'office_country', type:'text', label:'Office Country', required:true},
        {name: 'office_state', type:'text', label:'Office State', required:true},
        {name: 'office_lga', type:'text', label:'Office LGA', required:true},
        {name: 'office_phone', type:'text', label:'Office Phone', required:true},
        {name: 'office_email', type:'text', label:'Office Email', required:true},
    ],
    examinationRefereeFields: [
        {name: 'referee_name', type:'text', label:'Referee Name', required:true},
        {name: 'referee_number', type:'number', label:'Referee Number', required:true},
        {name: 'referee_address', type:'text', label:'Referee Address', required:true},
    ],
    examinationCertificateFields: [
        {name:'dental_school_result', type:'file', label:'Dental School Certificate', required:false}, 
        {name:'dental_school_testimonial', type:'file', label:'Dental School Testimonial', required:false},
        {name:'waec_result', type:'file', label:'Waec Result', required:false}  
    ],
    examinationSchFields:[
        {name: 'institutions_attended', type:'text', label:'Institution Attended', required:true},
        {name: 'hod_name', type:'text', label:'HOD Name', required:false},
        {name: 'hod_phone', type:'text', label:'HOD Phone', required:false},
        {name: 'hod_email', type:'email', label:'HOD Email'},
        {name: 'qualifications', type:'text', label:'Qualifications', required:false},
        {name: 'professional_qualifications', type:'text', label:'Professional Qualifications', required:false},
    ],

    // Profile Update Form
    schProfileUpdateFields: [
        {name: 'address', type:'text', label:'School Address', required:true},
        {name: 'state', type:'text', label:'School State', required:true},
        {name: 'region', type:'text', label:'School Region', required:true},
        {name: 'postal_number', type:'text', label:'Postal Number', required:false},
        {name: 'sch_phone', type:'text', label:'School Phone Number', required:false},
        {name: 'hod_name', type:'text', label:'HOD Name', required:false},
        {name: 'hod_phone', type:'text', label:'HOD Phone', required:false},
        {name: 'hod_email', type:'email', label:'HOD Email'},
        {name: 'sch_logo', type:'file', label:'School Logo', required: false},
    ],

    schChangePassword: [
        {name: 'new_password', type:'password', label:'New Password', required:true},
        {name: 'confirm_password', type:'password', label:'Confirm Password', required:true},  
    ],
}