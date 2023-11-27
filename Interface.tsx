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

interface IndexingState {
    indexed: Indexing[]; 
    indexingData: {};
    isActive:boolean
    stepperState: string   
}