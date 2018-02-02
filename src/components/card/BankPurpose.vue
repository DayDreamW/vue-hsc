<!--按用途选卡-->
<template>
	<div class="wrap">
		<router-link class="item" v-for="item in items" :to="{path:'/Card/OpenCard',query:{id:item.id}}" tap="div" :key="item.id">
			<img :src="item.logo" />
			<p>{{item.name}}</p>
		</router-link>
	</div>
</template>

<script>
	export default{
		props:['items']
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		background-color:white;
		overflow: hidden;
		a{
			color:black;
			text-decoration: none;
			&.item{
				width: 25%;
				float:left;
				margin-top: 0.5rem;
				text-align: center;
				img{
					width:5rem;
				}
				p{
					font-size: 0.8rem;
					line-height: 0.8rem;
				}
			}
		}
	}
</style>