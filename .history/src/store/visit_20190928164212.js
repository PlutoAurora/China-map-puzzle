import {
    FETCH_RANK

} from './type/actions'

import {
    ResultService,

} from '../common/service/api.js'
import {

} from './type/mutations'


const state = {
    rankList: Array,
    myTime: Number,
    myRank: Number,
}


const mutations = {
    // 提交本人通关信息
    [POST_GRADE](state, time) {
        console.log(state, time)
    },
    // 得到排行榜
    [CHECK_RANK](state, rankMsg) {
        state.rankList = rankMsg
    },
    // 得到本人成绩排名
    [CHECK_MYGRADE](state, payload) {
        state.myTime = payload.myTime;
        state.myRank = payload.myRank;
    }
}
const actions = {

    // 得到排行榜
    async [FETCH_RANK]({ commit }, level) {
        let { data } = await ResultService.mySpecialPost('/get', level)
        commit(CHECK_RANK, rankMsg)
    },

}
export default {
    state,
    mutations,
    actions,
}