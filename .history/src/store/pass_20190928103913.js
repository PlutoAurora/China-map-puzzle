import {


} from './type/actions'

import {

} from '../common/service/api.js'

import {
    SET_CURRENT_PASS

} from './type/mutations'

const initialState = {
    current_pass: null,
    default_pass: first
}

const state = {
    ...initialState
}


const mutations = {
    [SET_CURRENT_PASS](state, data) {
        state.current_pass = data
        console.log(state.current_pass)

    },

}
const actions = {

}
export default {
    state,
    mutations,
    actions,
}