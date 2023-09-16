<template>
<el-dropdown @command="setLanguage">
  <span class="el-dropdown-link">
    语言/language<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="zh-cn">中文</el-dropdown-item>
    <el-dropdown-item command="en">English</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    
</template>



<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      setLanguage(command) {
        this.$store.commit("i18n/setLanguage", {language:command});
      }
    }
  }
</script>