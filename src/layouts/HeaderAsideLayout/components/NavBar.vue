<template>
  <div class="navbar">
    <!-- <languageSelecter/> -->
    <div class="navbar-text">
      {{message.navigation.title}}
    </div> 
    <el-menu :default-active="activeIndex" router class="navbar-menu" mode="horizontal">
        <el-menu-item index="home" class="menu-item" >{{message.navigation.pageHome}}</el-menu-item>
        <el-menu-item index="calculator" class="menu-item">{{message.navigation.pageCalculator}}</el-menu-item>
        <el-menu-item index="support" class="menu-item">{{message.navigation.pageSupport}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {  mapGetters} from 'vuex'
import languageSelecter from '@/components/languageSelecter'
export default {
  name: "NavBar",
  components:{languageSelecter},
  data() {
    return {
      activeIndex: this.$route.path.split("/")[1]
    };
  },
  computed:{
     ...mapGetters('i18n',
     ['message']
     )
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/color.scss";
.navbar {
  height: auto;
  //padding-top: 30px;
  //padding-bottom: 0px;
  background-color: rgba(0, 0, 0, 0);
  .navbar-text {

      padding-top: 30px;
  padding-bottom: 30px;
   // margin: 0;
    text-align: center;
    color: $NavBarCol;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 1.1;
  }
  .navbar-menu {
    border: 0cm;
    background-color: rgba(0, 0, 0, 0);

    padding-top: 20px;
    padding-bottom: 0px;
    padding-left: 50px;
    color: #000000;
    .menu-item {
      margin: -1px -10px;
      padding: 0 40px;
      line-height: 60px;
      height: 60px;
      color: #000000;
      border: 0px;
      font-size: 25px;
      //border-top-left-radius:15px;
      //border-top-right-radius:15px;
      clip-path: polygon(0 100%,20% 0, 80% 0, 100% 100%);

      &:hover {
        color: $NavBarCol;
        background-color: rgba(0, 0, 0, 0);
      }
      &.is-active {
        background-color: $NavBarCol;
        color: #ffffff;

      }
    }
  }
}
</style>

