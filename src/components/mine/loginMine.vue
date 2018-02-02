<template>
	<div class="wrap">
		<HeadBar title="个人中心" />
		<content />
		<FootNav />	
	</div>
	
</template>

<script>
	import HeadBar from '../HeadBar'
	import FootNav from '../FootNav'
	import content from './content'
	export default {
		components:{
			HeadBar,FootNav,content
		}
		
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		
	}
</style>