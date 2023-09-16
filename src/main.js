import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import VueResource from 'vue-resource'
import Vuex from "vuex"
import store from './store'
//import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import {
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Button,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem
} from 'element-ui';
Vue.config.productionTip = false;
Vue.use(Radio);
Vue.use(RadioGroup);

Vue.use(Checkbox);

Vue.use(CheckboxGroup);


Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Menu);
Vue.use(Dialog)
Vue.use(MenuItem);

Vue.use(Vuex)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
