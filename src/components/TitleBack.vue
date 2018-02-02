<template>
	<div class="wrap">
	<div class="head">
			<p>{{item}}</p>
			<img src="../assets/arrow-backblack.png" @click="goback"/>
	</div>
		
	</div>
</template>

<script>
	export default{
		props:['item'],
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.head{
			position: fixed;
			top: 0rem;
			z-index: 1000;
			width: 100%;
			p{
				background: url(../assets/detailbar.png) 0 0 no-repeat;
				margin-top: 0rem;
				text-align: center;
				color: white;
				padding: 0.5rem 0;
				font-size: 1.2rem;
				margin: 0rem;
			}
			img{
				position: absolute;
				left: 1rem;
				top: 0.5rem;
				height: 1.5rem;
				
			}
		}
</style>