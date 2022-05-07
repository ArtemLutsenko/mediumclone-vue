import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: auth,
    feed,
  },
})
