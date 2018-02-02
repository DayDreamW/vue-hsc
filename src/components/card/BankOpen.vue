<template>
	<div class="wrap">
		<TitleBack item="信用卡办理"/>
		<div v-if="!data.length">
			<NoProduct />
		</div>
		<CardList :items="data"/>
	</div>
</template>

<script>
	import axios from 'axios'
	import TitleBack from '../TitleBack'
	import CardList from '../CardList'
	import NoProduct from '../NoProduct'
	export default {
		components:{
			TitleBack,CardList,NoProduct
		},
		data(){
			return{
				data:[]
			}
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
				let that = this
				let id = this.$route.query.id 
				let url="/api/creditcards/getCreditCardsByBank?bankId="+id+"&pageNo=1"
				axios.post(url).then(function(response){
					that.data = response.data.data.classify
					console.log(response.data.msg)
				})
			}
		}
		
		
	}
</script>

<style>
</style>