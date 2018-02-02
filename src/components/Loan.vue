<template>
	<div class="wrap">
		<HeadBar title="借款"/>
		<LoanContent />
		<FootNav />		
	</div>
</template>

<script>
	import HeadBar from './HeadBar'
	import FootNav from './FootNav'
	import LoanContent from './LoanContent'
	export default {
		components:{
			HeadBar,FootNav,LoanContent
		},
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
	}
	
</style>