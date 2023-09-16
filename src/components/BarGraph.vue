<template>
  <div
    id="echart"
    class="bargraph"
    ref="mychart"
  />

</template>

<script>
// import echarts from 'echarts'
import { mapState, mapGetters } from "vuex";
import echarts from 'echarts';
export default {
  name: "BarGraph",
 state(){
  return ["mychart"]
 },
  methods: {
    setEchart() {
      let dom = this.$refs.mychart;
      this.myChart = echarts.init(dom);
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

  computed: {
    ...mapGetters("calculator", ["graphOption"]),
    // ...mapGetters("i18n", ["message"])
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
