//备用
  // getters
  const getters = {
    message: (state, getters, rootState) => {
      return state.messages[state.language]
    },
  
  }
  
  
  
  // mutations
  const mutations = {
      setLanguage(state,{language}){
          state.language=language
      }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations
  }
  