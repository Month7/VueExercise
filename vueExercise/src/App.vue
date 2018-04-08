<template>
  <div id="app">
    <first></first>
    <slide></slide>
  </div>
</template>

<script>
    import first from './components/first'
    import slide from './components/slide'
    export default{
      data(){
        return {}
      },
      components:{
        first,
        slide
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
