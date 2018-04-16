<template>
    <div id="app">
        <router-link to="/home">slide</router-link>
        <router-link to="/about">todo</router-link>
        <router-link to="/cart">cart</router-link>
        <router-view></router-view> 
    </div>
</template>
<script>
    import axios from 'axios';  
    export default{
      data(){
        return {}
      },
      mounted:function(){
        this.$nextTick(function () {
            // axios({
            //     method:'get',
            //     url:'./data/cartData.json',
            //     data:{'id':123},
	        // }).then(function(res){
		    //     console.log(res);
	        // })
        })
      }
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
