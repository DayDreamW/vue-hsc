<!--借贷产品列表-->
<template>
	<div class="wrap">
		<li v-for="item in items">
			<router-link :to="{path: '/loan/productdetail',query:{id:item.id}}" tag="div" :key="item.id">
			<img :src="item.image_url"/>
			<div class="right">
				<span>{{item.rate}}</span><br/>
				<span class="dayRate">日利率</span>
				
			</div>
			<div class="center">
				<span class="title"><b>{{item.name}}</b></span><br/>
				<span class="detail">额度范围(元)：<b>{{item.money_sml}}-{{item.money_big}}</b></span><br/>
				<span class="detail">借款期限(天)：<b>{{item.deadline_sml}}-{{item.deadline_big}}</b></span>
			</div>
			<p>{{item.propaganda_language}}</p>
			</router-link>
		</li>
	</div>
</template>

<script>
	export default {
		props:['items']
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin-top: 0rem;
		background-color:white ;
		
		li{
			padding-top: 0.5rem;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
			border-bottom: thin solid #F4F2F0;
			list-style-type: none;
			overflow: hidden;
			p{
				font-size:0.6rem;
				line-height: 0.6rem;
				color: #666666;
				border-top: thin solid #F4F2F0;
				padding-top: 0.8rem;
			}
			.center{
				.detail{
					font-size: 0.6rem;
					color: #666666;
					line-height: 1.5rem;
					b{
						color: red;
					}
				}
				.title{
					font-size:0.8rem;
					display: inline-block;
					margin-bottom: 0.5rem;
				}
			}
			img{
				width: 4rem;
				height: 4rem;
				float: left;
				margin-right: 0.5rem;
			}
			.right{
				float: right;
				width: 15%;
				margin-top: 1rem;
				span{
					font-size: 1.2rem;
					color: red;
					display: inline-block;
					margin-bottom:0.6rem;
				}
				.dayRate{
					font-size: 0.8rem;
					color: dimgrey;
				}
			}
		}
	}
</style>