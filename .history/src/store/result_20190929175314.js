import {
    SET_FIRST,
    SET_SECOND,
    SET_THIRD,
    SET_FOURTH,
    SET_ENTER_GAME,
    SET_RANKLIST,
    SET_TIME,
    SET_RANK,
    SET_CURRENT_PASS,

} from './type/mutations'

import {
    FETCH_ENTER_GAME,
    FETCH_RANKPAGE,
    FETCH_SUCCESS,
} from './type/actions'

import {
    ResultService,

} from '../common/service/api.js'



const initialState = {
    first_flag: 'unlock',
    second_flag: 'lock',
    third_flag: 'lock',
    forth_flag: 'lock',
    current_pass: null,
    default_pass: 'first',
    user_time: Number,
    user_rank: Number,
    rankList: Array,
}

const state = {
    ...initialState
}

const mutations = {

    // 通过某一关后的改变通关状态
    [SET_FIRST](state) {
        state.first_flag = 'success'
        state.second_flag = 'unlock'

    },
    [SET_SECOND](state) {
        state.second_flag = 'success'
        state.third_flag = 'unlock'

    },
    [SET_THIRD](state) {
        state.third_flag = 'success'
        state.forth_flag = 'unlock'
        state.default_pass = 'four'


    },
    [SET_FOURTH](state) {
        state.forth_flag = 'success'
        state.default_pass = 'four'
    },

    // 修改current_pass
    [SET_CURRENT_PASS](state, data) {
        state.current_pass = data
    },

    // 修改通关状态
    [SET_ENTER_GAME](state, pass_status) {
        if (pass_status == 1) {
            state.first_flag = 'success';
            state.second_flag = 'unlock';
        } else if (pass_status == 2) {
            state.first_flag = 'success';
            state.second_flag = 'success';
            state.third_flag = 'unlock'
        } else if (pass_status == 3) {
            state.first_flag = 'success';
            state.second_flag = 'success';
            state.third_flag = 'success';
            state.forth_flag = 'unlock'
        } else if (pass_status == 4) {
            state.first_flag = 'success';
            state.second_flag = 'success';
            state.third_flag = 'success';
            state.forth_flag = 'success'
        }

    },

    // 以下三个修改state里某关卡排行榜，用户某关卡用时，用户某关卡排行
    [SET_RANKLIST](state, data) {
        state.rankList = data
    },
    [SET_TIME](state, data) {
        state.user_time = data
    },
    [SET_RANK](state, myRank) {
        state.user_rank = myRank
    }
}
const actions = {
    // 得到用户通关数。点击参与，选择关卡页面初始化，访问用户通关状态，即通关数量（get请求），后端返回通关情况数组
    async [FETCH_ENTER_GAME]({
        commit
    }) {
        let {
            data
        } = await ResultService.enterGame()
        let pass_status = data.MyList.length
        // 修改关卡状态
        commit(SET_ENTER_GAME, pass_status)
    },


    // 为排行榜页面请求数据(用户可能从选择页挑选自己已经通关页面查看目前排行榜)
    // 传关卡数字得到排行榜，get请求，返回排行榜List数组，目前用户名次MyRank，用户通关情况数组MyList
    async [FETCH_RANKPAGE]({
        commit
    }, level) {
        let {
            data
        } = await ResultService.getRankList(level)
        let grade = data.MyList[0]
        let myRank = data.MyRank
        let rankList = data.List
        // 修改state里的排行榜，名次
        commit(SET_RANK, myRank)
        commit(SET_TIME, grade.Second)
        commit(SET_RANKLIST, rankList)
    },

    // 通关某一关卡后访问的接口，后端返回处理了用户当前成绩后的排行榜和用户自己本关卡的时间和名次，params传post参数（包含level\time)
    async [FETCH_SUCCESS]({
        commit
    }, params) {
        // List数组为该关卡前30名用户的数组，Rank为该用户该关卡的信息（不包含排名），MyRank为用户该关卡的排行
        let {
            data
        } = await ResultService.getSuccess(params)
        let rankList = data.List
        let grade = data.Rank
        let myRank = data.MyRank
        // 修改state里排行榜，用户某关卡用时，用户某关卡排行
        commit(SET_RANKLIST, rankList)
        commit(SET_TIME, grade.Second)
        commit(SET_RANK, myRank)
    }
}



export default {
    state,
    mutations,
    actions,
}