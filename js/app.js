new Vue({
	el:'.main',
	data:{
		
		todo:'',
		list:[
		],
	},
	methods:{
		addTodos:function(){
			this.list.push({
				name:this.todo,
				isChecked:false
			}) ;
			this.todo = '';
		},
		deleteTodo:function(item){
			var index = this.list.indexOf(item);
			this.list.splice(index,1);
		}
	},
	computed:{
		noCheckLength:function(){
			return this.list.filter(function(item){
				return !item.isChecked;
		}).length
		}
	}
})