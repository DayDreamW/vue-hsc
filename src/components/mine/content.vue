<template>
	<div class="wrap">
		<div class="title">
			<img src="../../assets/tuji.png" />
			<span>{{phone}}</span>
		</div>
		<router-link :to='item.route' v-for="item in nav" class="line" tag="div" :key="item.id">
			<lineItem  :imgsrc='item.imgsrc'  :textline='item.textline' :key="item.id"/>
		</router-link>
		<button type="button" @click="logout()">退出登录</button>
		
	</div>
</template>

<script>
	import lineItem from './lineItem'
	const Child = {
		props: ['imgsrc','textline'],
		template: '<div class="items"><img class="imgs" :src="imgsrc"/><span>{{textline}}</span></div>'
	}
	export default {
		computed:{
			phone:function(){
				let accessToken = localStorage.getItem("accesstoken")
				return accessToken.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3")
			}
		},
		components:{
			 lineItem
		},
		data(){
			return{
				nav:[{imgsrc:require("../../assets/cardorang.png"),textline:'个人资料',id:"1", route:'/Mine/personCard'},
					 {imgsrc:require("../../assets/cardorang.png"),textline:'关于我们',id:"2",route:'/Mine/investPeople'}, 
				]
			}
		},
		methods:{
			logout(){
				localStorage.removeItem('accesstoken')
				this.$router.replace({
						path: '/Login'
					})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.wrap{
		padding:0rem;
		margin-top:2.5rem;
		background-color: white;
		.title{
		 	width:100%;
			background-image:url(../../assets/background-color.png);
			img{
				width: 4rem;
				margin: 1rem;
				vertical-align: middle;
			}
			span{
				color: white;
				font-size:1.5rem;
				display: inline-block;
			
			}
			
		}
		.line{
				width: 100%;
		}
		
		button{
			width:100%;
			position: absolute;
			bottom: 4rem;
			/*height: 2rem;*/
			border: none;
			outline: none;
			background-color: #FF0000;
			color: white;
			font-size: 1.2rem;
			padding: 0.5rem 0rem;
		}
		
	}
</style>