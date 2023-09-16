<template>
  <div class="app-wrapper">
    <div class="main-container">

      <div class="header">
        <nav-bar></nav-bar>
      </div>
      <div class="main">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
 import { NavBar, AppMain } from './components';

export default {
  name: 'layout',
  components: {
     NavBar,
    //  SideBar,
     AppMain,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/color.scss";
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: $BackGroundCol;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
el-header{
  padding:0px;
  border:0px;
  height:auto;
}
.main-container {
  min-height: 100vh;
  // transition: margin-left 0.28s;
  margin: auto;
  width: 1000px;
  background-color: $BackGroundCol;
}
</style>
