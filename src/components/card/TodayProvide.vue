<template>
	<div class="wrap">
		
		<a class="item" v-for="item in items" :href="item.linkUrl">
			<img :src="item.img" />
			<div class="itemp">
				<p>{{item.name}}</p>
				<p>{{item.summary}}</p>
			</div>
			
		</a>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data() {
			return{
				items:[]
			}
		},
		created(){
			this.getData()
		},
		methods: {
			getData(){
				let that = this
				axios.post("/api/creditcards/getCreditCardsByRecom?pageNo=1&pageSize=5")
				.then(function(response){
					that.items = response.data.data.classify
				})
			}
	
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		overflow: hidden;
		padding-left:1rem;
		padding-top: 1rem;
		a.item{
			text-decoration: none;
			color: #666666;
			float:left;
			width:8rem;
			overflow:hidden;
			height:8rem;
			margin-right:2rem;
			background-color:white;
			border-radius:0.5rem;
			box-shadow:0px 2px 5px #CCCCCC;
			margin-bottom:1rem;
			img{
				width: 8rem;
				height: auto;
			}
			.itemp{
				margin-left: 0.35rem;
				margin-right: 0.35rem;
				overflow: hidden;
				p{
					font-size: 0.8rem;
					line-height: 1.3rem;
					margin: 0rem;
					width: 10rem;
				}
				p+p{
					font-size:0.2rem ;
				}
			}

		}
	}
</style>