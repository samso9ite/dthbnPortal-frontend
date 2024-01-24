interface Indexing {
    first_name: string;
    surname: string;
    middlename: string;
    age:number;
    approved: boolean;
    lga:string;
    unapproved: boolean;
    cadre: string;
    closed: boolean;
    comment: string;
    contact_address: string;
    email: string;
    examinations: string[];
    id: number;
    institution: number;
    marital_status: string;
    marriage_cert: URL;
    nationality: string;
    o_level_cert: string;
    o_level_cert_0: string;
    permanent_address: string;
    place_of_work: string;
    profile_image: string;
    referee_name:string;
    referee_name_0:string;
    referee_phone:number;
    referee_phone_2:number;
    referee_address:string;
    referee_address_1:string;
    religion: string;
    school_attended_1: any;
    school_attended_2: any;
    school_attended_3: any;
    admission_grad_year_1: string;
    admission_grad_year_2: string;
    admission_grad_year_3: string;
    qualification_1: string;
    qualification_2: string;
    qualification_3: string;
    sex: string;
    state: string;
    submitted: boolean;
    telephone: string;
    verified: boolean;
    year: string;
    exam_number: string;
    exam_type: string;
    exam_year: string;
    exam_number_0: string;
    exam_type_0: string;
    exam_year_0: string;
    sub_1: string;
    sub_2: string;
    sub_3: string;
    sub_4: string;
    sub_5: string;
    sub_6: string;
    sub_7: string;
    sub_1_0:string;
    sub_2_1: string;
    sub_3_2: string;
    sub_4_3: string;
    sub_5_4: string;
    sub_6_5: string;
    sub_7_6: string;
    grade_1: string;
    grade_2: string;
    grade_3: string;
    grade_4: string;
    grade_5: string;
    grade_6: string;
    grade_7: string;
    grade_1_0: string;
    grade_2_1: string;
    grade_3_2: string;
    grade_4_3: string;
    grade_5_4: string;
    grade_6_5: string;
    grade_7_6: string;
    exam_sitting: number
}

interface Examination {
    first_name: string;
    surname: string;
    middlename: string;
    age:number;
    approved: boolean;
    declined: boolean;
    cadre: string;
    closed: boolean;
    comment: string;
    contact_address: string;
    email: string;
    exam_sitting:string[];
    examinations: string[];
    id: number;
    institution: number;
    marital_status: string;
    permanent_address: string;
    place_of_work: string;
    profile_image: string;
    referees: string[];
    religion: string;
    gender: string;
    submitted: boolean;
    telephone: string;
    verified: boolean;
    year: string;
    postal_address:string;
    residential_country:string;
    residential_state: string;
    residential_lga:string;
    maiden_name:string;
    state_of_origin:string;
    lga_state:string;
    senatorial_district: string;
    date_of_birth:string;
    state_of_birth:string;
    lga_of_birth:string;
    qualifications:string;
    professional_qualifications: string;
    institutions_attended:string;
    hod_name:string;
    hod_phone:string;
    hod_email:string;
    employment_status:string;
    present_position:string;
    department: string;
    office_name:string;
    office_address:string;
    sector:string;
    office_country:string;
    office_state:string;
    office_lga:string;
    office_phone:string;
    office_email:string;
    mode_of_payment:string;
    residential_address:string;
    waec_result:string;
    dental_school_result:string;
    dental_school_testimonial:string;
    title:string
}

interface IndexingState {
    indexed: Indexing[]; 
    indexingData: {};
    isActive:boolean;
    stepperState: string;
    isUpdate:boolean,
    updateRecordKey: number
}

interface ExaminationState {
    examinationRecord: Indexing[]; 
    formData: {};
    isActive:boolean
    stepperState: string,
    isUpdate:boolean,
    updateRecordKey: number
}