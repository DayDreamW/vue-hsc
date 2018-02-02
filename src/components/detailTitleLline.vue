<template>
	<p>{{title}}</p>
</template>

<script>
	export default {
		props:['title']
	}
</script>

<style scoped lang="scss">
p{
	margin: 0;
	background-color: white;
	padding-left: 0.5rem;
	border-left: solid 3px orangered;	
}

</style>