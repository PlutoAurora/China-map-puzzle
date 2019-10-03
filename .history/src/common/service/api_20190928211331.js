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
        ] = `eyJleHAiOiIxNTY5Njg2NTkwIiwiaGVhZEltZ1VybCI6Imh0dHA6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9oMWxWbzBOMDhBN1BCVGM5b2VOWloxNlhsUE11b2VDWDlkOVl5WllCVEx0aHQ2U1I5Qk9zcG5KMlZYQUhnQnE4bmNLZ1pjRnNES1NaZTJLQWliREI2c0EvMTMyIiwiaWF0IjoiMTU2OTY3NTc5MCIsIm5pY2tuYW1lIjoi5Y2B5LiDIiwib3BlbmlkIjoib3VSQ3lqbFVnUmNzbmVWRGxDLVdSRlpoZWhfNCIsInJlZElkIjoiMDRkMWQ1OTUzM2VhMmI4MzY3ZGVmNjIyYjkxZGU5NWRmZjRmZGQ3MyIsInN1YiI6InhicyJ9.FzyGLAEkvAH7v7WI4mLbT0Tv/bOYvsqy9n8KTQCeWKIpxGLDdUxAPdneAWmvBVNOIfTOHE2m9d9o1cgM0n0yEG6znGVOorTJUsf6Dm8ukA7KtD/M/ut24iT7SS/9nx5y/is31ekUXA7CnuKoUgJCH5oPcQrQy8PYFqK/o9+IETlGgYilXTnvOlo6VYUbN5j7KLSzw5Sp5IDrJ5+hagG27hC3/oCdBzGPNW2AM/TK4C+VlfrwH9edfb6vRUydn1Tyd/icxFprQ1bPoGS3zR50Jf0CxsZi+7rx6tnaO5NPrZ7TkIlApq3lw9qI/+p9m0tVJxJwI+3mA3W5WCsIWdNOlA==`;
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

    getSuccess(params) {
        return ApiService.post(`success`, params)
    },
    getRankList(params) {
        return ApiService.get(`get?level=${params}`)
    }

}




