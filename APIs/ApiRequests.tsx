import { formData } from "@/store/examination-slice";
import api from "./api";
import { FormValues } from "@/UI/genericForm"


const generalRequest = async (url:string, method: 'post' | 'put' | 'patch' | 'get' | 'delete', formData?:FormValues, fileUpload?:boolean) => {
    
    var currentPath = window.location.pathname;
   
    try{
        let config
        if(method == 'get'){
            const response = await api.axios_instance[method](api.baseUrl+url)
            return response
        }else{
            if (fileUpload) {
                // If there are files, set the Content-Type to multipart/form-data
                config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                };
            }
            const response = await api.axios_instance[method](api.baseUrl+url, formData, config)

            return response
        }
          
    }catch(error:any){
        if(error.response && error.response.data){
           if (error.response.status == "401" && !currentPath.includes('/auth')){
                window.location.href = "https://portal.dthbn.gov.ng/auth/"
           }
            
            let data = error.response.data
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const value = data[key];
                    throw new Error(` ${key} : ${value}`)
                }
            } 
        }else{
            throw new Error("An error occured while making the request")
        }
        
    }
};

 const apiRequest = {
    login: (formData:FormValues) => generalRequest('token/', 'post', formData),
    signUp: (formData:FormValues) => generalRequest('auth/sign_up', 'post', formData),
    forgotPwd: (formData:FormValues) => generalRequest('auth/forgot-password', 'post', formData),
    resetPwd: (formData:FormValues, uid:any, token:any) => generalRequest(`auth/reset-password/${uid}/${token}`, 'post', formData),
    accountActivation: (formData:FormValues) => generalRequest('auth/activate', 'post', formData),
    changePassword: (formData:FormValues) => generalRequest('auth/change_pwd/', 'post'),
    getUserAccount: (param:string) => generalRequest(`auth/get_account/${param}`, 'get'),

    // School Portal API's 
    dashboard:() => generalRequest('school/dashboard/', 'get'),
    indexingList: (year:string) => generalRequest(`school/indexed_record/${year}`, 'get'),
    createIndexing: (formData:FormValues, fileUpload:boolean) => generalRequest('school/new_indexing/', 'post', formData, fileUpload=true),
    submitIndexingForApproval: () => generalRequest('school/submit_all_index/', 'patch'),
    updateIndexRecord: (formData:FormValues, fileUpload:boolean,pk:number) => 
    generalRequest(`school/update_indexing/${pk}`, 'patch', formData, fileUpload=true),

    // Examination API's
    examinationRecord: (year:string) => generalRequest(`school/exam_record/${year}`, 'get'), 
    createExamRecord: (formData:FormValues, fileUpload:boolean) => generalRequest('school/exam_reg/', 'post', formData, fileUpload=true),
    submitExamForApproval: () => generalRequest('school/submit_all_exam_record/', 'patch'),
    updateExamRecord: (formData:FormValues, fileUpload:boolean,pk:number) => 
    generalRequest(`school/update_exam_record/${pk}/`, 'patch', formData, fileUpload=true),

    // School Profile
    createProfile: (formData:FormValues, fileUpload:boolean) => generalRequest(`school/schoolprofile/`, 'post', formData, fileUpload=true),
    updateProfile: (formData:FormValues, fileUpload:boolean,  pk:number) => 
        generalRequest(`school/profile_update/${pk}/`, 'patch', formData, fileUpload=true),

    // Admin Endpoints
    adminDashboard: () =>generalRequest('admin/dashboard', 'get'),
    accreditedSchools: () =>generalRequest('admin/accredited_schools', 'get'),
    allSchools: () => generalRequest('admin/all_schools', 'get'),
    allProfessionals: () => generalRequest('admin/all_professionals', 'get'),
    userRestriction: (id:number, type:string) => generalRequest(`admin/restriction/${id}/${type}`, 'post'),
    deleteAccount: (id:number) => generalRequest(`admin/delete_user/${id}`, 'delete'),
    indexedList: (year:string) => generalRequest(`admin/indexed_list/${year}`, 'get'),
    schIndexedRec: (id:any, year:any, type:any) => generalRequest(`admin/sch_indexed_rec/${id}/${year}/${type}`, 'get'),
    examList: (year:string) => generalRequest(`admin/exam_record/${year}`, 'get'),
    schExamRec: (id:any, year:any, type:any) => generalRequest(`admin/sch_exam_rec/${id}/${year}/${type}`, 'get'),
    indexRegSwitch: (type:string) => generalRequest(`admin/index_reg_switch/${type}`, 'post'),
    examRegSwitch: (type:string) => generalRequest(`admin/exam_reg_switch/${type}`, 'post'),
    indexStatus: () => generalRequest('admin/indexing_status/1', 'get'),
    examStatus: () => generalRequest('admin/exam_status/1', 'get'),
    approveIndex: (id:number) => generalRequest(`admin/approve_index/${id}`, 'patch'),
    approveExam: (id:number) => generalRequest(`admin/approve_exam/${id}`, 'patch'),
    declineIndex: (id:number, formData:{}) => generalRequest(`admin/decline_indexing/${id}`, 'patch', formData),
    declineExam: (id:number, formData:{}) => generalRequest(`admin/decline_exam/${id}`, 'patch', formData),
    reverseIndex: (id:number) => generalRequest(`admin/reverse_index_submission/${id}`, 'patch'),
    reverseExamSubmission: (id:number) => generalRequest(`admin/reverse_exam_submission/${id}`, 'patch'),
    resetIndexLimit: (id:number, year:string, limit:number) => generalRequest(`admin/set_index_limit/${id}/${year}/${limit}`, 'patch'),
    resetExamLimit: (id:number, year:string, limit:number) => generalRequest(`admin/set_exam_limit/${id}/${year}/${limit}`, 'patch'),
}

export default apiRequest 