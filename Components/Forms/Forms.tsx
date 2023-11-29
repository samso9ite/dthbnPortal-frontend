import GenericForm, {Field, FormValues} from "@/UI/genericForm"


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
    {value:'Agricultural Science', label:'Agircultural Science'},
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

const generateFields = (count:number,  field:string, options?:any,) => {
    
    const generatedFields = Array.from({length:count}, (_, index) => ({
        name: `${field}_${index + 1}`,
        type: options ? 'select' : 'text',
        label: `${field} ${index + 1}`, 
        required: false,
        options: options
        
    }))
    return generatedFields;
    
}

const generatedSubjectFields = generateFields(8, 'Subject', subjectOptions);
const generatedGradeFields = generateFields(8, 'Grade' , gradeOptions);
const generatedSchField = generateFields(3, 'School');
const generatedCertField = generateFields(3, 'Qualifications')


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
                {value:'', label:'Select Cadre'},
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
        // {name: 'institution_name', type:'text', label:'Institution', required:true},
        {name: 'first_name', type:'text', label:'First Name', required:true}, 
        {name: 'middle_name', type:'text', label:'Middle Name', required:true},
        {name: 'surname', type:'text', label:'Last Name', required:true},
        {name: 'cadre', type:'select', label:'Cadre', required:true,
            options: [
                {value:'', label:'Select Cadre'},
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician'},
                {values:'Dental Therapist', label:'Dental Therapist'},
                {values:'Dental Surgery Assistant', label:'Dental Surgery Assistant'},
                {values:'Dental Nurse', label:'Dental Nurse'}
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
        {name:'profile_image', type:'file', label:'Profile Image', required:true},
        {name: 'marriage_cert', type:'file', label:'Marriage Certificate', required:false},
       
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
        {name:'o_level_cert', type:'file', label:'O Level Certificate', required:true}
    ],
    indexingSchCertDetails: [
        generatedSchField,
        generatedCertField
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
                {values:'Dental Surgery Technician', label:'Dental Surgery Technician'},
                {values:'Dental Therapist', label:'Dental Therapist'},
                {values:'Dental Surgery Assistant', label:'Dental Surgery Assistant'},
                {values:'Dental Nurse', label:'Dental Nurse'}
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
}