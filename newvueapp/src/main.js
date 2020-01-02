import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Posts from './components/posts.component.vue';
import ListOfCourses from './components/listofcourses.component.vue';
import PostDetails from './components/postdetails.component.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);//making vue awarre of the router

const routes=[
  {path:'',component:ListOfCourses},
  {path:'/posts',component:Posts},
  {path:'/postdetails/:id',component:PostDetails},
  {path:'*',redirect:'/'}
];
var router=new VueRouter({
  routes,
  mode:'history'
});
//global filter
Vue.filter('currency',function(val,args){
return `${args}.${val}`
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
