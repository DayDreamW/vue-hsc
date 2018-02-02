<template>
	<div class="noProducts">
		<img src="../assets/noProdust.png"/> 
		<p>暂无产品</p>
		<p>宝宝正努力上架中...</p>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.noProducts{
		text-align: center;
		height: 100%;
		widows: 100%;
		margin-bottom: 0rem;
		p{
			font-size: 1.2rem;
			line-height: 0.9rem;
		}
		p+p{
			font-size: 0.9rem;
			line-height: 0rem;
		}
		img{
			width: 80%;
			margin-left: 10%;
			margin-right: 10%;
			margin-top: 6rem;
			margin-bottom: 0.5rem;
		}
	}
</style>