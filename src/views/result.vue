<template>
  <div class="calculator">
    <div class="border-top">
      {{message.navigation.pageResult}}
    </div>
    <div class="result">
      <graph
        class="bargraph"
        :graphOption="lineGraphOption"
      />
      <graph
        class="bargraph"
        :graphOption="barGraphOption"
      />
      <!-- <div class="comments">
        {{message.otherText.comments}}
      </div> -->
      <el-button @click="$router.push('calculator')">{{message.navigation.reset}}</el-button>
    </div>
    <div class="border-bottom">

    </div>
  </div>
</template>

<script>
//import { mapState, mapGetters } from "vuex";
import graph from "@/components/graph.vue";
export default {
  beforeRouteEnter(to, from, next) {
    if (from.name == "Calculator") next();
    else next("/calculator");
  },
  name: "result",
  components: {
    graph
  },
  computed: {
    message() {
      return this.$store.getters["i18n/message"];
    },
    lineGraphOption() {
      return this.$store.getters["calculator/lineGraphOption"];
    },
    barGraphOption() {
      return this.$store.getters["calculator/barGraphOption"];
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/components/color.scss";
.border-top {
  padding: 30px 15px; // border-top-left-radius: 15px;
  // border-top-right-radius: 15px;
  text-align: left;
  padding-left: 40px;
  background-color: $NavBarCol;
  color: #ffffff;
  font-size: 28px;
  line-height: 1.1;
}
.comments {
  font-size: small;
  text-align: center;
  color: #333333;
}
.border-bottom {
  height: 30px; //border-bottom-left-radius: 15px;
  //border-bottom-right-radius: 15px;
  background-color: $NavBarCol;
}

.result {
  font-size: 20px;
  background-color: #ffffff;
  padding-bottom: 30px;
  padding-top: 30px;
  .bargraph {
    margin-left: auto;
    margin-right: auto;
  }
  .el-button {
    display: flex;
    margin-top: 30px;
    //margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
