<template>
	<div class="wrap">
		<router-link :to="{path:'/Card/OpenCard',query:{id:item.id}}" v-for="item in items" tap="div" class="item" :key="item.id">
			<img :src="item.logo" />
			<div>
				<span>{{item.name}}</span><br/>
				<span class="summary">{{item.summary}}</span>
			</div>
		</router-link>
		<router-link to="/Card/AllBanks" tap="div" class="yinlian">
			<img src="../../assets/5a588295edb3e.png" />
			<span>全部银行>></span>
		</router-link>
	</div>
</template>

<script>
	export default {
		props:['items']
	}
</script>

<style lang="scss" scoped>
	.wrap{
		background-color: white;
		padding-left: 1rem;
		padding-right: 1rem;
		margin: 0;
		overflow: hidden;
		a{
			text-decoration: none;
			color: black;
			&.item{
				width: 50%;
				overflow: hidden;
				float: left;
				margin-top: 1rem;
				img{
					width: 5rem;
					height: 3.5rem;
					float: left;
				}
				&>div{
					margin-top: 0.5rem;
					overflow: hidden;
					width: 5.5rem;
					height: 2.5rem;
					span{
						margin-left: 1rem;
						font-size: 0.8rem;
						margin-top: 0.5rem;
					}
					.summary{
						color: #999999;
						font-size: 0.4rem;
						display: inline-block;
						margin-top: 0.4rem;
						width: 100%;
					}
				}
			
			}
		}
		.yinlian{
			img{
				margin-top: 1rem;
				width: 5rem;
				height: 3.5rem;
			}
			span{
				display: inline-block;
				font-size: 0.8rem;
				float: right;
				margin-top: 2rem;
				margin-right: 1.5rem;
			}
		}
	}
</style>