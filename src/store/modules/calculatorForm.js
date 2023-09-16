const state = {
  age: 'lessThan60',
  tumorSize: 'T1',
  // positiveLn: "one",
  ER: "negative",
  // PR: "negative",
  //hist: "duct",
  grade: "grade1", 
  //showed:false
}

// getters
// const getters = {
//   ageGroup(state) {

//     var ageGroup;
//     if (state.age < 40) {
//       ageGroup = "lessThan40";
//     } else if (state.age < 50) {
//       ageGroup = "between40and50";
//     } else if (state.age < 60) {
//       ageGroup = "between50and60";
//     } else if (state.age < 70) {
//       ageGroup = "between60and70";
//     } else {
//       ageGroup = "moreThan70";
//     }
//     return ageGroup;
//   },
//   tStage(state) {
//     var tStage;
//     if (state.tumorSize <= 2) {
//       tStage = "T1";
//     } else if (state.tumorSize <= 5) {
//       tStage = "T2";
//     } else {
//       tStage = "T3";
//     }
//     return tStage;
//   },
//   positiveLn(state) {
//     return state.positiveLn
//   },
//   ER(state) {
//     return state.ER
//   },
//   PR(state) {
//     return state.PR
//   },
//   hist() {
//     return 'duct'
//   },
//   grade(state) {
//     return state.grade
//   },

// }



// mutations
const mutations = {
    setSelections(state, {name,value}) {
      state[name] = value
    }
  }
  export default {
   // namespaced: true,
    state,
    //getters,
    mutations
  }
