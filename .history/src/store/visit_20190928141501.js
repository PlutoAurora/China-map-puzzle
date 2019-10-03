import {
    APOST_GRADE,
    ACHECK_RANK,
    ACHECK_MYGRADE

} from './type/actions'

import {
    ResultService,

} from '../common/service/api.js'
import {
    POST_GRADE,
    CHECK_RANK,
    CHECK_MYGRADE
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
    // 提交本人通关信息
    async [APOST_GRADE]({ commit }, payload) {

        let { data } = await ResultService.myPost('/success', payload.level, payload.time)


        // payload.success()
    },
    // 得到排行榜
    async [ACHECK_RANK]({ commit }, level) {
        let { data } = await ResultService.mySpecialPost('/get', level)
        []commit(CHECK_RANK, rankMsg)
    },
    // 得到本人成绩排名
    async [ACHECK_MYGRADE](context, level) {
        let myTime = ResultService.myGet(`/getMy`).MyList[level - 1].Second;
        let myRank = ResultService.myGet(`/getMy`).rank[level - 1];
        context.commit(CHECK_MINE, { myTime, myRank })
    }
}
export default {
    state,
    mutations,
    actions,
}