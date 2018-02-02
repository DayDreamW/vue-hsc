<template>
	<div class="wrap">
		<router-link :to="{path:'/Card/OpenCard',query:{id:item.id}}" v-for="item in items" tap="div" class="item" :key="item.id">
			<div>
				<img :src="item.logo" />
				<p>{{item.name}}</p>
			</div>
			<span class="summary">{{item.summary}}</span>
			
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
		margin: 0;
		background-color: white;
		overflow: hidden;
		
		a{
			
			color: black;
			text-decoration: none;
			&.item{
				float: left;
				text-align: center;	
				width: 25%;
				padding-bottom: 1rem;
				div{
					margin: 0 auto;
					background-color: white;
					overflow: hidden;
					border-radius: 0.5rem;
					width: 4.5rem;
					margin-bottom: 1rem;
					box-shadow: 0px 2px 5px #CCCCCC;
					img{
						width: 4.5rem;
					}
					p{
						font-size: 0.8rem;
						line-height:1.6rem;
						margin-top: 0rem;
						margin-bottom: 0rem;
					}
				}
				.summary{
					font-size: 0.6rem;
					text-align: center;
				}
				
				
			}
		}
	}
</style>