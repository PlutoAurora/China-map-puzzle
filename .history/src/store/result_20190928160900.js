import {
    SET_FIRST,
    SET_SECOND,
    SET_THIRD,
    SET_FOURTH,
    SET_ENTER_GAME
} from './type/mutations'

import {
    FETCH_ENTER_GAME
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
    rankList: Array,
    myTime: Number,
    myRank: Number,


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

    }
}
const actions = {
    async [FETCH_ENTER_GAME]({ commit }) {
        let { data } = await ResultService.enterGame()
        let pass_status = data.MyList.length

        commit(SET_ENTER_GAME, pass_status)
    }
}



export default {
    state,
    mutations,
    actions,
}