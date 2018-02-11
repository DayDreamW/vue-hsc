<!--消息轮播-->
<template>
	<div  class="wrap">
		<div id="box">
  			<ul id="con1" ref="con1" :class="{anim:animate==true}">
   		 		<li v-for='item in items'>{{item.content}}</li>
  			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
				animate:false,
				items:[]
			}
		},
		created(){
			this.getData()
			setInterval(this.scroll,1000)	
		},
		
		methods:{
			getData(){
				let that = this 
				let URL = '/api/index/getMessageList'
				axios.post(URL).then(function(response){
					that.items = response.data.data.comment
//					console.log(response.data.data.comment)
				})
			},
			scroll(){
//				let con1 = this.$refs.con1;
//				con1.style.marginTop = '-6rem'
				this.animate =! this.animate
				var that = this
				setTimeout(function(){
					that.items.push(that.items[0])
					that.items.shift()
//					con1.style.marginTop = '0rem'
					that.animate = !that.animate
				},500)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		margin-bottom: 0.5rem;
		padding: 0;
		width: 100%;
		height:2rem;
		overflow: hidden;
		transition: all 2s;
		background: url(../../assets/trumpet.png) 1rem 0.3rem no-repeat;
		background-color: white;
		background-size: 1.3rem;
		.anim{
			transition: all 2s;
		}
		#con1{
			margin: 0;
			padding: 0;
			li{
				list-style: none;
				line-height:2rem;
				height:2rem;
				font-size: 0.8rem;
				margin-left: 2.5rem;
			}
		}
	}
</style>