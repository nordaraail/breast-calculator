import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './modules/i18n'
import calculator from './modules/calculator.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    i18n: i18n,
    calculator:calculator
  },

})