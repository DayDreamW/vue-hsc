<template>
	<div class="wrap">
		<HeadBar title="个人中心"/>
		<Content/>
		<FootNav />
	</div>
	
</template>

<script>
	import HeadBar from './HeadBar'
	import FootNav from './FootNav'
	import Content from './mine/content'
	export default {
		components:{
			HeadBar,FootNav,Content
		},
	}
</script>

<style scoped lang="scss">
	.wrap{
		margin: 0;
		padding: 0;
	}
</style>