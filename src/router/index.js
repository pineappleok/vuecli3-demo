import Vue from 'vue';
import Router from "vue-router";
const routes=[ 
{
  path:"/test",
  component:()=>import("V/test.vue")
}
];
Vue.use(Router);
export default new Router({
  routes
});