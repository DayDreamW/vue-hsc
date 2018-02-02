<!--页面标题栏-->
<template>
	<p class="title">{{title}}</p>
</template>

<script>
	export default {
		props:['title']
	}
</script>
<style scoped lang="scss">
	.title{
		background-image: url(../assets/titleBar.png);
		color: white;
		font-size: 1.2rem;
		line-height: 1rem;
		padding-top: 0.8rem;
		padding-bottom: 0.8rem;
		margin-top:0px;
		text-align: center;
		position: fixed;
		width: 100%;
		top: 0rem;
		z-index: 999;
	}
</style>