interface Indexing {
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
    grades: string[];
    id: number;
    institution: number;
    marital_status: string;
    marriage_cert: URL;
    nationality: string;
    o_level_cert: URL;
    permanent_address: string;
    place_of_work: string;
    profile_image: string;
    referees: string[];
    religion: string;
    school_attended: any;
    sex: string;
    state: string;
    submitted: boolean;
    telephone: string;
    verified: boolean;
    year: string
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
    grades: string[];
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
}

interface IndexingState {
    indexed: Indexing[]; 
    indexingData: {};
    isActive:boolean
    stepperState: string   
}

interface ExaminationState {
    examinationRecord: Indexing[]; 
    formData: {};
    isActive:boolean
    stepperState: string   
}