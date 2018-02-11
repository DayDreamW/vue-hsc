<template>
	<div class="wrap">
		<ul class="tabBar">
			<li v-for="item in nav" @click="change(item.name,item.id)">
				<img :src="item.pic"/>
				<p :class="isSelect === item.name? 'active':''">{{item.name}}</p>
			</li>
		</ul>
		<ul>
			<div v-if = "items.length === 0">
				<NoProduct />
			</div>
			<ProductList :items="items"/>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import ProductList from './ProductList'
	import NoProduct from './NoProduct'
	export default {
		data(){
			return{
				items:'',
				isSelect:'极速贷款',
				id:'2',
				nav: [
					{title:'急速贷款',id:2,url:require('../assets/fast.png'),alt:"急速贷款"},
					{title:'大额贷款',id:1,url:require('../assets/big.png'),alt:"大额贷款"},
					{title:'低门槛贷',id:3,url:require('../assets/fast.png'),alt:"低门槛贷"},
					{title:'新品专区',id:4,url:require('../assets/fast.png'),alt:"新品专区"}
				]
			}
		},
		components:{
			ProductList,NoProduct
		},
		created(){
			this.getData()
			this.getData1()
		},
		methods:{
				getData(){
					let that = this
					let URL = "/api/loans/getLoansListByLoanType";
					var params = new URLSearchParams()
					
					params.append('loanType',that.id)
					params.append('pageNo','1')
					axios.post(URL,params).then(function(response){
						that.items = response.data.data.classify
//						console.log(that.items)
					})
				},
				getData1(){
					let that = this 
					let URL = '/api/index/getloanClassList'
					axios.post(URL).then(function(response){
						that.nav = response.data.data.classify
//						console.log(that.nav)
					})
				},
				change(title,id){
					this.isSelect = title
					this.id = id
					this.getData()
				}
		}
	}
</script>

<style scoped lang="scss">
.wrap{
	/*margin-top:2.5rem;*/
	/*margin-bottom:9rem;*/
	margin-bottom:2.2rem;
	ul{
		margin-left:-40px;
		height: 100%;
		margin: 0rem;
		padding: 0rem;
	}
	.tabBar{
		background-color: white;
		margin: 0;
		padding: 0;
		clear: both;
		width: 100%;
		overflow: hidden;
		border-bottom: thin solid #F4F2F0;
		margin-bottom: 0.3rem;
		li{
			margin-top: 2rem;
			float: left;
			width: 25%;
			margin-top: 1rem;
			list-style-type: none;
			text-align: center;
			img{
				width: 3rem;
				height: 3rem;
			}
			p{
				line-height: 0.5rem;
			}
		}
		.active{
			color: orangered;
		}
	}
}
</style>