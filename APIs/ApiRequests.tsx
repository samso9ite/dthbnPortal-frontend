import { formData } from "@/store/examination-slice";
import api from "./api";
import { FormValues } from "@/UI/genericForm"

const generalRequest = async (url:string, method: 'post' | 'put' | 'patch' | 'get' | 'delete', formData?:FormValues, fileUpload?:boolean) => {
    
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
            console.log(response);
            
            return response
        }
          
    }catch(error:any){
        if(error.response && error.response.data){
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
    resetPwd: (formData:FormValues, uid:string, token:string) => generalRequest(`auth/reset-password/${uid}/${token}`, 'post', formData),
    accountActivation: (formData:FormValues) => generalRequest('auth/activate', 'post', formData),
    changePassword: (formData:FormValues) => generalRequest('auth/change_pwd/', 'post'),
    getUserAccount: (param:string) => generalRequest(`auth/get_account/${param}`, 'get'),

    // School Portal API's 
    dashboard:() => generalRequest('school/dashboard', 'get'),
    indexingList: () => generalRequest('school/indexed_record/2023-2024', 'get'),
    createIndexing: (formData:FormValues, fileUpload:boolean) => generalRequest('school/new_indexing/', 'post', formData, fileUpload=true),
    submitIndexingForApproval: () => generalRequest('school/submit_all_index/', 'patch'),
    updateIndexRecord: (formData:FormValues, fileUpload:boolean,pk:number) => 
    generalRequest(`school/update_indexing/${pk}`, 'patch', formData, fileUpload=true),

    // Examination API's
    examinationRecord: () => generalRequest('school/exam_record/2023-2024', 'get'), 
    createExamRecord: (formData:FormValues, fileUpload:boolean) => generalRequest('school/exam_reg/', 'post', formData, fileUpload=true),
    submitExamForApproval: () => generalRequest('school/submit_all_exam_record/', 'patch'),
    updateExamRecord: (formData:FormValues, fileUpload:boolean,pk:number) => 
    generalRequest(`school/update_exam_record/${pk}/`, 'patch', formData, fileUpload=true),

    // School Profile
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
}

export default apiRequest