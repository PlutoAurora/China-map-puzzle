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
        ] = `Token ${window.localStorage.getItem('id_token')}`;
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
        return ApiService.get(`${API}/getMy`)
    },

    getSuccess() {
        return ApiService.post(`${API}/success`, params)
    },
    getRankList(params) {
        return ApiService.get(`${API}/get?level=${params}`)
    }

}




