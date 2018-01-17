import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js'
import { store } from  './store/store.js';



Vue.use(VueRouter);


//******END DATABASE CONFIG*********************/




//***********VUE ROUTER CONFIG *********/
const router  = new VueRouter({
  routes,
  mode: 'history'
});
//***********END VUE ROUTER CONFIG *********/



  new Vue({
  el: '#app',
  //register router so the router works
  router,
  //register store so vuex works
  store,
  render: h => h(App)
})
