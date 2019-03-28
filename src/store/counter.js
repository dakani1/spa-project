const state = {
  counter1: 1
}

const mutations = {
  increment (state) {
    state.counter1 += 100
  }
}
const getters = {
  getCount (state) {
    return 'counter.getCount'
  }
}
const actions = {
  increment1 ({commit}) {
    commit('increment')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
