<!--首页的产品列表组件-->
<template>
	<div class="warp">
		<!--<ListTitle :item="value"/>-->
		<ListTitle :item="item"/>
		<ProductList :items="item.list"/>
		<ListTitle :item="card"/>
		<CardList :items="card.list"/>
	</div>
</template>

<script>
	import axios from 'axios'
	import ListTitle from "./ListTitle"
	import ProductList from "./ProductList"
	import CardList from './CardList'
	export default {
		data(){
			return{
				value:{},
				item:{},
				card:{},
			}
		},
		components:{
			ListTitle,ProductList,CardList
		},
		created(){
			this.getData()
		},
		methods: {
			
			getData(){
				let that = this
				axios.post("/api/index/getLabelList").then(function(response){
					that.item = response.data.data.loan
					that.card = response.data.data.card
					console.log(response.data.data.card.name)
				})
				.catch(function(err){
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		/*margin-top:3rem;*/
	}
</style>