<template>
	<div class="slide" v-on:mouseover="stop()" v-on:mouseout="start()">
		<div class="slideshow">
			<transition-group tag="ul" name="image">
				<li v-for="(img,index) in imgArray" :key="index" v-show="index==mark">
					<a href="#">
						<img :src="img"/>
					</a>
				</li>
			</transition-group>
		</div>
		<div class="bar">
			<span v-for="(item,index) in imgArray" :class="{'active':index==mark}" :key="index" @click="change(index)"></span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				timer:null,
				mark:0,
				imgArray:[
					'../static/timg1.jpg',
					'../static/timg2.jpg',
					'../static/timg3.jpg',
					'../static/timg4.jpg',
					'../static/timg5.jpg',
				]
			}
		},
		methods:{
			autoPlay(){
				this.mark++;
				if(this.mark==4){
					this.mark=0;
				}
			},
			play(){
				this.timer = setInterval(this.autoPlay,2500);
			},
			change(i){
				this.mark = i;
			},
			stop(){
				clearInterval(this.timer);
			},
			start(){
				this.timer = setInterval(this.autoPlay,2500);
			}
		},
		created(){
			this.play();
		}
	}
</script>
<style>  
  * {  
    margin: 0;  
    padding: 0;  
    list-style: none;  
}  
  .slide {  
    width: 1024px;  
    height: 320px;  
    margin: 0 auto;  
    margin-top: 50px;  
    overflow: hidden;  
    position: relative;  
}  
  .slideshow {  
    width: 1024px;  
    height: 320px;  
}  
  li {  
    position: absolute;  
  }  
  img {  
    width: 1024px;  
    height: 320px;  
}  
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
}  
  .bar span {  
    width: 20px;  
    height: 5px;  
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-right: 10px;  
}  
  .active {  
    background: red !important;  
}  
  .image-enter-active{
  	transform:translateX(0);
  	transition: all 1.5s ease; 
}
  .image-leave-active{
  	transform: translateX(-100%);
  	transition: all 1.5s ease; 
}
  .image-enter{
  	transform: translateX(100%);
}
  .image-leave{
  	transform: translateX(0);
}
</style>  