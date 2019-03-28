import Axios from 'axios'

const axios = Axios.create({
  // baseURL: 'https://api.vava.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

let oApi = {
  'banners': '/gateway/brand-product/banners'
}

function _get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then((res) => {
      if (res.data.resCode === 200) {
        resolve(res.data.data)
      } else {
        reject(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  })
}

_get(oApi.banners, {
  bannerPosition: 'index',
  brand: 'rp'
}).then((res) => {
  console.log(2222222222)
  console.log(res)
})

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
