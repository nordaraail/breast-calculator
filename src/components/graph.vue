<template>
  <div
    id="echart"
    class="bargraph"
    ref="mychart"
  />

</template>

<script>
// import echarts from 'echarts'
//$Recycle.Binimport { mapState, mapGetters } from "vuex";
import echarts from 'echarts';
export default {
  name: "BarGraph",
 state(){

  return ['myChart']
 },
 props:['graphOption'],
  methods: {
    setEchart() {
      const dom = this.$refs.mychart;
      this.myChart=echarts.init(dom)
      this.myChart.setOption(this.graphOption);
    },
    renewEchart() {
      this.myChart.setOption(this.graphOption);
    }
  },
  watch: {
    graphOption() {
      this.renewEchart();
    },
    // message() {
    //   //  this.setEchart();
    //   this.renewEchart();
    // }
  },
   mounted() {
    this.setEchart();
  //   this.renewEchart();
  }
};
</script>

<style lang="scss" scoped>
.bargraph {
  height: 300px;
  width: 800px;
}
</style>
