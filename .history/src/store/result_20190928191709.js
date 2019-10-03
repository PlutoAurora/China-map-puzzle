import {
    SET_FIRST,
    SET_SECOND,
    SET_THIRD,
    SET_FOURTH,
    SET_ENTER_GAME,
    SET_USER_GRADE,
    SET_RANK,
    SET_MIDDLEWARE,
    SET_NEW_GRADE


} from './type/mutations'

import {
    FETCH_ENTER_GAME,
    FETCH_RANK,
    FETCH_SUCCESS
} from './type/actions'

import {
    ResultService,

} from '../common/service/api.js'



const initialState = {
    first_flag: 'unlock',
    second_flag: 'lock',
    third_flag: 'lock',
    forth_flag: 'lock',
    default_pass: 'first',
    grade: Array,
    rank: Array,
    user_time: Number,
    user_rank: Number,
    rankList: Array,




}

const state = {
    ...initialState
}

const mutations = {

    [SET_FIRST](state) {
        state.first_flag = 'success',
            state.second_flag = 'unlock'

    },
    [SET_SECOND](state) {
        state.second_flag = 'success',
            state.third_flag = 'unlock'

    },
    [SET_THIRD](state) {
        state.third_flag = 'success',
            state.forth_flag = 'unlock'
        state.default_pass = 'four'


    },
    [SET_FOURTH](state) {
        state.forth_flag = 'success',
            state.default_pass = 'four'


    },

    //通关状态
    [SET_ENTER_GAME](state, payload) {
        if (payload == 1) {
            state.first_flag = 'success';
            state.second_flag = 'unlock';
        } else if (payload == 2) {
            state.first_flag = 'success';
            state.second_flag = 'success';
            state.third_flag = 'unlock'
        } else if (payload == 3) {
            state.first_flag = 'success';
            state.second_flag = 'success';
            state.third_flag = 'success';
            state.forth_flag = 'unlock'
        } else if (payload == 4) {
            state.first_flag = 'success';
            state.second_flag = 'success';
            state.third_flag = 'success';
            state.forth_flag = 'success'
        }

    },

    [SET_MIDDLEWARE](state, data) {
        state.grade = data.MyList
        state.rank = data.rank
    },

    [SET_USER_GRADE](state, level) {
        state.user_time = state.grade[level - 1].Second
        state.user_rank = state.rank[level - 1]
    },
    [SET_RANK](state, data) {
        state.rankList = data
    },
    [SET_NEW_GRADE](state, data) {
        state.user_time = state.Second
        state.user_rank = state.rank

    }
}
const actions = {
    async [FETCH_ENTER_GAME]({ commit }) {
        let { data } = await ResultService.enterGame()
        let pass_status = data.MyList.length
        commit(SET_MIDDLEWARE, data)
        commit(SET_ENTER_GAME, pass_status)
    },
    // 得到排行榜
    async [FETCH_RANK]({ commit }, level) {
        let { data } = await ResultService.getRankList(level)
        commit(SET_RANK, data)
    },
    async [FETCH_SUCCESS]({ commit }, params) {
        console.log(params)
        let { data } = await ResultService.getSuccess(params)
        let rankList = data.List
        let grade = data.rank
        commit(SET_RANK, rankList)
        commit(SET_NEW_GRADE, grade)

    }
}



export default {
    state,
    mutations,
    actions,
}