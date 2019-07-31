import Vue from 'vue';
import Router from "vue-router";
const routes=[ 
{
  path:"/test",
  component:()=>import("V/test.vue")
}, 
{
  path:"/d3",
  component:()=>import("V/d3.vue")
}
];
Vue.use(Router);
export default new Router({
  routes
});