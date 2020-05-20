import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import "@scss/global.scss"; // global css
// // 引入根组件， 同样也可以注册全局组件
// import App from './App.vue'
// // // 注册全局组件
// // // 1.引入组件
// // import Users from './components/Users'

// // // 2.注册全局组件
// // Vue.component('Users', Users)

// 注册全局的组件
import components from "@utils/component";
Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
