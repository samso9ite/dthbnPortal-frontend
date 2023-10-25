import axios from 'axios'
const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios_instance.defaults.headers.post['Accept'] = 'application/json;';
axios_instance.interceptors.request.use(async function (config) {
let access = await sessionStorage.getItem('access') 
    if(!navigator.onLine){
        alert("Hello! Seems you're offline");
        return {
          headers: {},
          method: config.method,
          url: ""
        };
      };
  access ? config.headers.Authorization = `JWT ${access}` : null;
  return config;
});

// Route user to login when token expires
// axios_instance.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//         localStorage.clear();
//         sessionStorage.clear();
//         return window.location.href="http://127.0.0.1:8000/api/";
//     }
//   }
// })

const baseUrl = 'http://127.0.0.1:8000/api/token/'
// const baseUrl = 'http://127.0.0.1:8000/'
export default { 
  axios_instance,
  baseUrl,
}