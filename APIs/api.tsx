import axios, {AxiosInstance, AxiosRequestHeaders, AxiosResponse }  from 'axios'

interface Api {
  axios_instance: AxiosInstance;
} 

const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8; multipart/form-data';
axios_instance.defaults.headers.post['Accept'] = 'application/json;';
axios_instance.interceptors.request.use(async function (config) {
let access = await sessionStorage.getItem('token') 

    // if(!navigator.onLine){
    //     alert("Hello! Seems you're offline");
    //     return {
    //       headers: {} as AxiosRequestHeaders,
    //       method: config.method,
    //       url: ""
    //     };
    //   };

  access ? config.headers.Authorization = `Bearer ${access}` : null;
  return config;
});


// const baseUrl = 'https://api.dthbn.gov.ng/api/'
const baseUrl =  'http://127.0.0.1:8000/api/'
export default { 
  axios_instance,
  baseUrl,
} 