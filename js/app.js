new Vue({
	el:'.main',
	data:{
		
		todo:'',
		list:[
		],
		modifyTodos:'',
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
		},
		modifyTodo:function(item){
			this.modifyTodos = item;
			console.log(item);
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