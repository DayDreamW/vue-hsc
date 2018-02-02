<template>
	<p>{{item}}</p>
</template>

<script>
	export default{
		props:['item']
	}
</script>

<style lang="scss" scoped>
	p{
		font-size: 1.1rem;
		background-color: wheat;
		margin: 0;
		background-color: white;
		padding-left: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
</style>