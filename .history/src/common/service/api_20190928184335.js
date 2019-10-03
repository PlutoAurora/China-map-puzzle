import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API } from "@/common/config";    //后端url

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API
        this.setHeader()

    },
    //每次发送请求时 把获得的token放在请求头里
    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
        ] = `eyJyZWRJZCI6ImQ3ZjUyNzFkMDUwNWY2OTA2OTQ1NjNhOTU2NzExMDI0Njk1MWE4ZmMiLCJoZWFkSW1nVXJsIjoiaHR0cDovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1EwajRUd0dUZlRMVTFmNXlmczh2ZVFpYmR5QzlpY0JqVVpIdjVzOUlZNFdkcXJucDNwRUNjRkNRc1Z1NzhiWElXN2E0aWJqTk5SajQ4WEFRdmxpY2NQaWFzSWcvMTMyIiwibmlja25hbWUiOiLkvq/nnJ/ms5MiLCJzdHVOdW0iOiIyMDE4MjEwMDIyIiwicmVhbE5hbWUiOiLkvq/nnJ/ms5MiLCJjb2xsZWdlIjoi6YCa5L+h5LiO5L+h5oGv5bel56iL5a2m6ZmiICIsIm1ham9yIjoiIiwiY2xhc3MiOiIwMTA2MTgwMSJ9.qyzi/4IvcSa83f0SbUaGFWNjwDS5slR8LuRDsVc0cmmKLABqiIh9UzV+nhLuopwt8oungyoPwKIqAyC+ATJDrB/9vhpaqQG/yCVk4Y/cOytK+L15vTfyVfpePCY/5cD9dyphZmkCUhGUO4eAPMI76jI2e3BlMTvOMzDBi+IsC0QlKlEhUL1uArDiDeN79lp27rKH6ki0X8ZGdJoV9UolwwwtWuvlCyIlydddJH7ozLqAG6qyHvVvNup9tF7C0YiU4q/xkYLjmi8LL/iIMYXDlPSyTVwCs+2uXijLeettOkxBVrh70NNAfTKW4MEjStiOqIu0YmCmI7dVT4lZ5WvyIg==`;
        console.log(localStorage.getItem('id_token'))
    },

    // 封装axios

    get(resource) {
        return Vue.axios.get(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    patch(resource, params) {
        return Vue.axios.patch(resource, params);
    },

    put(resource, params) {
        return Vue.axios.put(resource, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;

export const ResultService = {
    enterGame() {
        return ApiService.get(`getMy`)
    },

    getSuccess() {
        return ApiService.post(`success`, params)
    },
    getRankList(params) {
        return ApiService.get(`get?level=${params}`)
    }

}




