<template>
  <div class="home">
    <div class="border-top">
      {{message.navigation.pageHome}}
    </div>
    <div class="homeText" v-html="message.otherText.instruction">

    </div>
    <div class="border-bottom">

    </div>
  </div>
</template>

<script>
//import { mapState, mapGetters } from "vuex";
export default {
  name: "result",
  computed: {
    message() {
      return this.$store.getters["i18n/message"];
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
  padding-left:40px;
  background-color: $NavBarCol;
  color: #ffffff;
  font-size: 28px;
  line-height: 1.1;
}

.border-bottom {
  height: 30px; //border-bottom-left-radius: 15px;
  //border-bottom-right-radius: 15px;
  background-color: $NavBarCol;
}

.homeText {
  font-size: 20px;
  background-color: #ffffff;
  padding-bottom: 100px;
  padding-top:30px;
   padding-left: 80px;
   padding-right: 80px;
   line-height:150%;
   text-align: justify
}
</style>

