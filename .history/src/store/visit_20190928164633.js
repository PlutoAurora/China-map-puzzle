import {
    FETCH_RANK

} from './type/actions'

import {
    ResultService,

} from '../common/service/api.js'

import {
    SET_RANK
} from './type/mutations'


const state = {
    rankList: Array,

}


const mutations = {


    // // 提交本人通关信息
    // [POST_GRADE](state, time) {
    //     console.log(state, time)
    // },
    // // 得到排行榜
    // [CHECK_RANK](state, rankMsg) {
    //     state.rankList = rankMsg
    // },

}
const actions = {

    // 得到排行榜
    async [FETCH_RANK]({ commit }, level) {
        let { data } = await ResultService.getRankList(level)
        commit(SET_RANK, data)
    },

}
export default {
    state,
    mutations,
    actions,
}