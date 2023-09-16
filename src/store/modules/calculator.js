import hazard from "@/store/hazard.js"
import form from "@/store/modules/calculatorForm.js"
import graph from './calculatorGraph.js'

const state = {
    hazard: hazard,
    DontShowDisclamier:false
}

// getters
const getters = {
    // baseLine(state) {
    //     return {
    //         nrOs5: state.hazardfactor.nrOs.baseline['year5'],
    //         nrOs10: state.hazardfactor.nrOs.baseline['year10'],
    //         rOs5: state.hazardfactor.rOs.baseline['year5'],
    //         rOs10: state.hazardfactor.rOs.baseline['year10'],
    //         nrDfs5: state.hazardfactor.nrDfs.baseline['year5'],
    //         nrDfs10: state.hazardfactor.nrDfs.baseline['year10'],
    //         rDfs5: state.hazardfactor.rDfs.baseline['year5'],
    //         rDfs10: state.hazardfactor.rDfs.baseline['year10'],
    //     }
    // },

    hazardRate(state, getters, rootState) {
        var selections = rootState.calculator.form
        var hazardrate = Object.keys(selections).reduce(
            ({nrOs,rOs,nrDfs,rDfs}, x) => {                
                return {
                    nrOs: nrOs * state.hazard.hazardRate.nort.Os[x][selections[x]],
                    rOs: rOs * state.hazard.hazardRate.rt.Os[x][selections[x]],
                    nrDfs: nrDfs * state.hazard.hazardRate.nort.Dfs[x][selections[x]],
                    rDfs: rDfs * state.hazard.hazardRate.rt.Dfs[x][selections[x]],
                }
            }, {
                nrOs: 1,
                rOs: 1,
                nrDfs: 1,
                rDfs: 1
            }
        )
        return hazardrate
    },
    survivalRate(state, getters) {
        var fullbaseline=state.hazard.baseline.fullbaseline
        var xxyearbaseline=state.hazard.baseline.xxyearbaseline
        var hazardRate=getters.hazardRate
        var fullSurvivalRate={
            rt:{
                Os:fullbaseline.rt.Os.map(({time,HR})=>{
                    return{
                        time:time,
                        survival:Math.exp(-HR*hazardRate.rOs)
                    }
                }),
                Dfs:fullbaseline.rt.Dfs.map(({time,HR})=>{
                    return{
                        time:time,
                        survival:Math.exp(-HR*hazardRate.rDfs)
                    }
                }),
            },
            nort:{
                Os:fullbaseline.nort.Os.map(({time,HR})=>{
                    return{
                        time:time,
                        survival:Math.exp(-HR*hazardRate.nrOs)
                    }
                }),
                Dfs:fullbaseline.nort.Dfs.map(({time,HR})=>{
                    return{
                        time:time,
                        survival:Math.exp(-HR*hazardRate.nrDfs)
                    }
                }),
            }
           

            
        }
        var xxyearSurvivalRate= {
            rt: {
                Os: {
                    5: Math.exp(-xxyearbaseline.rt.Os[5]*hazardRate.rOs),
                    10:Math.exp(-xxyearbaseline.rt.Os[10]*hazardRate.rOs)
                },
                Dfs: {
                    5: Math.exp(-xxyearbaseline.rt.Dfs[5]*hazardRate.rDfs),
                    10:Math.exp(-xxyearbaseline.rt.Dfs[10]*hazardRate.rDfs)
                }
            },
            nort: {
        
                Os: {
                    5: Math.exp(-xxyearbaseline.nort.Os[5]*hazardRate.nrOs),
                    10: Math.exp(-xxyearbaseline.nort.Os[10]*hazardRate.nrOs)
                },
                Dfs: {
                    5: Math.exp(-xxyearbaseline.nort.Dfs[5]*hazardRate.nrDfs),
                    10: Math.exp(-xxyearbaseline.nort.Dfs[10]*hazardRate.nrDfs)
                }
            }
        }
        return {
            fullSurvivalRate,
            xxyearSurvivalRate
        }

        // return {
        //     nrOs5: 1 - getters.hazardRate.nrOs5,
        //     nrOs10: 1 - getters.hazardRate.nrOs10,
        //     rOs5: 1 - getters.hazardRate.rOs5,
        //     rOs10: 1 - getters.hazardRate.rOs10,
        //     nrDfs5: 1 - getters.hazardRate.nrDfs5,
        //     nrDfs10: 1 - getters.hazardRate.nrDfs10,
        //     rDfs5: 1 - getters.hazardRate.rDfs5,
        //     rDfs10: 1 - getters.hazardRate.rDfs10
        // }
    }
}
const mutations={
    SetDontShowDisclamier(state){
       state.DontShowDisclamier= true
    }
}

const modules = {
    form: form,
    graph: graph
}
export default {
    namespaced: true,
    state,
   getters,
   mutations,
    modules
}