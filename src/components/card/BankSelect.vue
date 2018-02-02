<template>
	<div class="wrap">
		<router-link :to="{path:'OpenCard',query:{id:item.id}}" tap="div" class="item" v-for="item in data" :key="item.id">
			<img :src="item.logo" />
			<span>{{item.name}}</span><br/>
			<span class="summary">{{item.summary}}</span>
			<img class="imgs" src="../../assets/arrow-right.png"/>
		</router-link>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return {
				data:''
			}
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
				let that = this
				axios.post("/api/bank/getBanks?pageNo=1").then(function(response){
					that.data = response.data.data.classify
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		overflow: hidden;
		/*background-color:white ;*/
		a{
			color: #999999;
			display: block;
			&.item{
			position: relative;
			padding: 1rem;
			margin-bottom: 0.5rem;
			background-color: white;
			overflow:hidden;
			img{
				width:5.5rem;
				height: 4rem;
				float: left;
			}
			span{
				display: inline-block;
				margin-top:0.5rem;
				font-size: 0.8rem;
				margin-left: 1rem;
			}
			.summary{
				float: left;
				margin-top: 0.5rem;
				color: #999999;
			}
			.imgs{
				position: absolute;
				top: 2.3rem;
				right: 1rem;
				height: 1.5rem;
				width: auto;
				
				
			}
		}
		}
	}
</style>