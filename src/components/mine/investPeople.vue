<template>
	<div class="wrap">
		<TitleBack item="关于我们" />
		<p>
			"汇生财"隶属于上海融腾金融信息服务有限公司旗下的产品，总部位于上海。是一个优质信息搜索服务平台。平台依托庞大的征信数据集，先进的数据挖掘技术和智能搜索技术，致力于
			为广大上班族、个体户、蓝领等提供更优质、更优惠的信息服务。
		</p>
		<p>
		    "汇生财"核心团队成员来自腾讯、百度、微软、蚂蚁金服等行业巨头，拥有丰富的互联网从业经验。
		</p>
		<p class="white"></p>
	</div>
</template>

<script>
	import TitleBack from '../TitleBack'
	export default {
		components:{
			TitleBack
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		padding:0.8rem 0rem;
		background-color: white;
		
		p{
			font-size: 0.8rem;
			padding: 0.3rem 0.8rem;
			line-height: 1.2rem;
			
		}
		.white{
			padding-bottom: 24rem;
			height:100%;
		}
	}
</style>