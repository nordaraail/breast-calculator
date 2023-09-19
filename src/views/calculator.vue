<template>
  <div class="calculator">
    <div class="border-top">
      {{message.navigation.pageCalculator}}
    </div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-item-text">
          {{message.calculator.age}}
        </div>
        <el-radio-group
          v-model="age"
          class="form-item-components"
        >
          <el-radio label="lessThan60">≤60</el-radio>
          <el-radio label="between60and70">60~70</el-radio>
          <el-radio label="between70and80">70~80</el-radio>
          <el-radio label="moreThan80">>80</el-radio>
        </el-radio-group>
      </div>

      <div class="form-item">
        <div class="form-item-text">
          {{message.calculator.tumorSize}}
        </div>
        <el-radio-group
          v-model="tumorSize"
          class="form-item-components"
        >
          <el-radio label="T1">≤2mm</el-radio>
          <el-radio label="T2">2~10mm</el-radio>
          <el-radio label="T3">>10mm</el-radio>
        </el-radio-group>
      </div>

      <div class="form-item">
        <div class="form-item-text">
          {{message.calculator.grade}}
        </div>
        <el-radio-group
          v-model="grade"
          class="form-item-components"
        >
          <el-radio label="grade1">1</el-radio>
          <el-radio label="grade2">2</el-radio>
          <el-radio label="grade3">3</el-radio>
        </el-radio-group>

      </div>
      <div class="form-item">
        <div class="form-item-text">
          {{message.calculator.ER}}
        </div>
        <el-radio-group
          v-model="ER"
          class="form-item-components"
        >
          <el-radio label="negative">{{message.calculator.negative}}</el-radio>
          <el-radio label="positive">{{message.calculator.positive}}</el-radio>
        </el-radio-group>
      </div>
      <!-- <div class="form-item">
        <div class="form-item-text">
          {{message.calculator.PR}}
        </div>
        <el-radio-group
          v-model="PR"
          class="form-item-components"
        >
          <el-radio label="negative">{{message.calculator.negative}}</el-radio>
          <el-radio label="positive">{{message.calculator.positive}}</el-radio>
        </el-radio-group>
      </div> -->

      <!-- <div class="form-item">
        <div class="form-item-text">
          {{message.calculator.positiveLn}}
        </div>
        <el-radio-group
          v-model="positiveLn"
          class="form-item-components"
        >
          <el-radio label="one">1</el-radio>
          <el-radio label="two">2</el-radio>
          <el-radio label="three">3</el-radio>
        </el-radio-group>
      </div> -->

    </div>
    <div class="result">
      <el-button @click="showResult">{{message.navigation.showResult}}</el-button>
    </div>
    <div class="border-bottom">

    </div>
    <el-dialog
      :title="message.disclamier.title"
      :visible.sync="disclamierShow"
      width="30%"
    >
      <span
        style="text-align: justify"
        v-html="message.disclamier.text"
      ></span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-checkbox
          style="float:left"
          v-model="disclamierDontShowAgain"
        >{{message.disclamier.dontShowAgain}}</el-checkbox>
        <el-button @click="disclamierShow = false">{{message.disclamier.disagree}}</el-button>
        <el-button
          type="primary"
          @click="disclamierAgree"
        >{{message.disclamier.agree}}</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
//import { mapState, mapGetters } from "vuex";
//import graph from "@/components/graph";
export default {
  name: "calculator",
  data() {
    return {
      disclamierShow: false,
      disclamierDontShowAgain: false
    };
  },
  computed: {
    age: {
      get() {
        return this.$store.state.calculator.form.age;
      },
      set(value) {
        console.log(value);
        this.$store.commit("calculator/setSelections", {
          name: "age",
          value: value
        });
      }
    },
    tumorSize: {
      get() {
        return this.$store.state.calculator.form.tumorSize;
      },
      set(value) {
        console.log(value);
        this.$store.commit("calculator/setSelections", {
          name: "tumorSize",
          value: value
        });
      }
    },
    positiveLn: {
      get() {
        return this.$store.state.calculator.form.positiveLn;
      },
      set(value) {
        console.log(value);
        this.$store.commit("calculator/setSelections", {
          name: "positiveLn",
          value: value
        });
      }
    },
    ER: {
      get() {
        return this.$store.state.calculator.form.ER;
      },
      set(value) {
        console.log(value);
        this.$store.commit("calculator/setSelections", {
          name: "ER",
          value: value
        });
      }
    },
    PR: {
      get() {
        return this.$store.state.calculator.form.PR;
      },
      set(value) {
        console.log(value);
        this.$store.commit("calculator/setSelections", {
          name: "PR",
          value: value
        });
      }
    },
    grade: {
      get() {
        return this.$store.state.calculator.form.grade;
      },
      set(value) {
        console.log(value);
        this.$store.commit("calculator/setSelections", {
          name: "grade",
          value: value
        });
      }
    },
    message() {
      return this.$store.getters["i18n/message"];
    },
    lineGraphOption() {
      return this.$store.getters["calculator/lineGraphOption"];
    },
    barGraphOption() {
      return this.$store.getters["calculator/barGraphOption"];
    },
    DontShowDisclamier() {
      return this.$store.state.calculator.DontShowDisclamier;
    }
  },
  methods: {
    setSelections({ name, value }) {
      this.$store.commit("calculator/setSelections", {
        name: name,
        value: value
      });
    },
    disclamierAgree() {
      this.$router.push("result");
      this.disclamierShow = false;
      if (this.disclamierDontShowAgain === true) {
        this.$store.commit("calculator/SetDontShowDisclamier");
      }
    },
    showResult() {
      if (this.DontShowDisclamier == true) {
        this.$router.push("result");
      } else {
        this.disclamierShow = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/components/color.scss";
.border-top {
 
  padding: 30px 15px; // border-top-left-radius: 15px;
  // border-top-right-radius: 15px;
   padding-left:40px;
  text-align: left;
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

.form-container {
  font-size: 20px;
  background-color: #ffffff;
    padding-bottom: 30px;
  padding-top:80px;
   padding-left: 80px;
   padding-right: 80px;
  .form-item {
    position: relative;
    height: 70px;
    .form-item-text {
      float: left;
      position: relative;
      width: 40%;
    }
    .form-item-components {
      float: right;
      position: relative;
      width: 60%;
    }
  }
}

.result {
  font-size: 20px;
  background-color: #ffffff;
  padding-bottom: 30px;
  .el-button {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
