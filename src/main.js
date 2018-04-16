// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios';  
Vue.prototype.axios = axios;  

require('./assets/css/base.css');
require('./assets/css/checkout.css');
require('./assets/css/modal.css');
require('./assets/css/reset.css');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  axios,
})
// new Vue({
// 	el:'.main',
// 	data:{
// 		todo:'',
// 		list:[
// 		],
// 		modifyTodos:'',
// 	},
// 	components:{App},
// 	template:'<App/>',
// 	methods:{
// 		addTodos:function(){
// 			this.list.push({
// 				name:this.todo,
// 				isChecked:false
// 			}) ;
// 			this.todo = '';
// 		},
// 		deleteTodo:function(item){
// 			var index = this.list.indexOf(item);
// 			this.list.splice(index,1);
// 		},
// 		modifyTodo:function(item){
// 			this.modifyTodos = item;
// 			console.log(item);
// 		}
// 	},
// 	computed:{
// 		noCheckLength:function(){
// 			return this.list.filter(function(item){
// 				return !item.isChecked;
// 		}).length
// 		}
// 	}
// })