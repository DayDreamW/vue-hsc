<!--产品分类条-->
<template>
	<div class="wrap">
		<img :src="item.image_url" />
		<span>{{item.name}}</span>
	</div>
</template>

<script>
	//定义props,用来从父组件接收参数
	export default {
		props:['item']
	}
</script>

<style lang="scss" scoped>
	.wrap{
		background-color: white;
		margin: 0;
		img{
			width: 1.5rem;
			height: 1.5rem;
			margin-left: 0.5rem;
		}
		span{
		 	line-height: 1.8rem;
		 	left: 2.2rem;
		}

	}
</style>