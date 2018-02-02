<template>
	<div class="wrap">
		<div class="items">
			<img class="imgs" :src="imgsrc"/>
			<span>{{textline}}</span>
			<img class="img1" src="../../assets/arrow-right.png" />
		</div>
	</div>
</template>

<script>
	export default {
		props:['imgsrc','textline']
	}
</script>

<style scoped lang="scss">
	.wrap{
		
		padding: 0;
		margin:0.8rem 1rem;
		.items{
			padding-bottom: 0.8rem;
			width: 100%;
			border-bottom: 1px solid #F4F2F0;
			font-size:0.8rem;
			overflow:hidden;
			img{
				width: 1.2rem;
			}
			span{
				margin-left: 0.8rem;
			}
			.img1{
				width: 0.6rem;
				float: right;
				margin-top: 0.25rem;
			}
		}
	}
	
</style>