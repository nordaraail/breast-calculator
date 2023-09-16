const state = {}
// getters
const getters = {
  // graphOption(state, getters, rootState, rootGetters) {
  //   return {
  //     tooltip: {
  //       trigger: 'axis',
  //       axisPointer: {
  //         type: 'shadow'
  //       },

  //     },
  //     legend: {
  //       data: [rootGetters['i18n/message'].calculator.nort, rootGetters['i18n/message'].calculator.rt]
  //     },
  //     xAxis: {
  //       splitLine: {
  //         show: false
  //       },
  //       axisLabel: {
  //         show: false
  //       },
  //       axisTick: {
  //         show: false
  //       },
  //       axisLine: {
  //         show: false
  //       }
  //     },
  //     yAxis: {
  //       data: [rootGetters['i18n/message'].calculator.os5, rootGetters['i18n/message'].calculator.dfs5, rootGetters['i18n/message'].calculator.os10, rootGetters['i18n/message'].calculator.dfs10],
  //       inverse: true,
  //       axisTick: {
  //         show: false
  //       },
  //       axisLine: {
  //         show: false
  //       },
  //       axisLabel: {
  //         margin: 20,
  //         textStyle: {
  //           color: "#999",
  //           fontSize: 16
  //         }
  //       }
  //     },
  //     grid: {
  //       containLabel: true,
  //       top: "center",
  //       height: "85%",
  //       left: "10px",
  //       right: "170px"
  //     },
  //     series: [{
  //         // nort
  //         name: rootGetters['i18n/message'].calculator.nort,
  //         type: "pictorialBar",
  //         itemStyle: {
  //           color: "#EB7A77"
  //         },
  //         symbolClip: true,
  //         symbolRepeat: "fixed",
  //         symbolMargin: "5%",
  //         symbol: state.spirit,
  //         symbolSize: 20,
  //         symbolBoundingData: state.maxData,
  //         data: [0, 0, 0, 0],
  //         z: 20,
  //         label: {
  //           normal: {
  //             show: true,
  //             formatter: function (params) {
  //               // if (params.value<=0.95) {
  //               //    return (params.value* 100).toFixed(1) + " %"
  //               // }else{
  //               //   return  ">95%"
  //               // }
  //               return (params.value / state.maxData * 100).toFixed(1) + " %";
  //             },
  //             position: "right",
  //             offset: [10, 0],
  //             textStyle: {
  //               color: "#EB7A77",
  //               fontSize: 18
  //             }
  //           }
  //         }
  //       },
  //       {
  //         //rt
  //         name: rootGetters['i18n/message'].calculator.rt,
  //         type: "pictorialBar",
  //         itemStyle: {
  //           color: "#81C7D4"
  //         },
  //         symbolClip: true,
  //         symbolRepeat: "fixed",
  //         symbolMargin: "5%",
  //         barGap: '20%',
  //         barCategoryGap: '40%',
  //         symbol: state.spirit,
  //         symbolSize: 20,
  //         symbolBoundingData: state.maxData,
  //         data: [0, 0, 0, 0],
  //         z: 10,
  //         label: {
  //           normal: {
  //             show: true,
  //             formatter: function (params) {
  //               return (params.value / state.maxData * 100).toFixed(1) + " %";
  //             },
  //             position: "right",
  //             offset: [10, 0],
  //             textStyle: {
  //               color: "#81C7D4",
  //               fontSize: 18
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   }
  // },
  lineGraphOption(state, getters, rootState, rootGetters) {
    var message = rootGetters["i18n/message"].calculator
    return {
      tooltip: {
        show: false,
      },
      legend: {
        data: [message.nrdfs, message.rdfs,message.nros, message.ros, ]
      },
      grid: {
        left: '3%',
        right: '12%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: message.years,
        mix: 0,
        max: 14 * 12,
        interval: 12,
        axisLabel: {
          formatter(value) {
            return (value / 12)
          }
        }
      },
      yAxis: {
        type: 'value',
        minInterval: 0.05,
        min: function (value) {
          return (value.min - 0.1).toFixed(1);
        },
        max: 1,
        axisLabel: {
          formatter(value) {
            return (value * 100) + '%'
          }
        }

      },
      series: [
        {
          showSymbol: false,

          name: message.nrdfs,
          type: 'line',
          data: getters.survivalRate.fullSurvivalRate.nort.Dfs.map(({
            time,
            survival
          }) => {
            return [time, survival]
          })
        },
        {
          showSymbol: false,
          name: message.rdfs,
          type: 'line',
          data: getters.survivalRate.fullSurvivalRate.rt.Dfs.map(({
            time,
            survival
          }) => {
            return [time, survival]
          })
        },
        
        
        {
          showSymbol: false,

          name: message.ros,
          type: 'line',
          data: getters.survivalRate.fullSurvivalRate.rt.Os.map(({
            time,
            survival
          }) => {
            return [time, survival]
          })
        },
        {
          showSymbol: false,

          name: message.nros,
          type: 'line',
          data: getters.survivalRate.fullSurvivalRate.nort.Os.map(({
            time,
            survival
          }) => {
            return [time, survival]
          })
        },
        
      ]
    }
  },
  barGraphOption(state, getters, rootState, rootGetters) {
    var message = rootGetters["i18n/message"].calculator
    return {
      tooltip: {
        show: false,
      },
      legend: {
        data: [message.nort, message.rt]
      },
      grid: {
        left: '3%',
        right: '12%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: [message.dfs5, message.dfs10, message.os5, message.os10, ],
        axisLabel: {
          interval: 0
        },
      },


      yAxis: {

        type: 'value',
        max: 1,
        min: function (value) {
          return Math.max((value.min - 0.4).toFixed(1), 0);
        },
        axisLabel: {
          formatter(value) {
            return (value * 100) + '%'
          }
        }
      },
      series: [

        {
          // showSymbol: false,
          name: message.nort,
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: ({
                value
              }) => (value * 100).toFixed(1) + '%'
            }
          },
          data: [
            getters.survivalRate.xxyearSurvivalRate.nort.Dfs[5],
            getters.survivalRate.xxyearSurvivalRate.nort.Dfs[10],
            getters.survivalRate.xxyearSurvivalRate.nort.Os[5],
            getters.survivalRate.xxyearSurvivalRate.nort.Os[10],

          ],
          barWidth: '25%',
          barGap: '15%',
          itemStyle: {
            color: '#2F4554'
          }


        },

        {
          // showSymbol: false,
          name: message.rt,
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: ({
                value
              }) => (value * 100).toFixed(1) + '%'
            }
          },
          data: [
            getters.survivalRate.xxyearSurvivalRate.rt.Dfs[5],
            getters.survivalRate.xxyearSurvivalRate.rt.Dfs[10],
            getters.survivalRate.xxyearSurvivalRate.rt.Os[5],
            getters.survivalRate.xxyearSurvivalRate.rt.Os[10],

          ],
          barWidth: '25%',

          itemStyle: {
            color: '#C23531'
          }
        },

      ]
    }
  },


  // newData(state, getters, rootState, rootGetters) {
  //   return {
  //     series: [{
  //         data: [
  //           getters.survivalRate.nrOs5,
  //           getters.survivalRate.nrDfs5,
  //           getters.survivalRate.nrOs10,
  //           getters.survivalRate.nrDfs10
  //         ]
  //         //nort
  //       },
  //       {
  //         data: [
  //           getters.survivalRate.rOs5,
  //           getters.survivalRate.rDfs5,
  //           getters.survivalRate.rOs10,
  //           getters.survivalRate.rDfs10
  //         ]
  //         //rt
  //       }
  //     ]
  //   }
  // }
}




export default {
  state,
  getters,
  // mutations
}