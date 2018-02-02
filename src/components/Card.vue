<!--轮播图-->
<template>
	<div class="wrap">
		<HeadBar title="信用卡"/>
		<div class="title">
			<Banner :items = "data.slideList"/>
			<LineTitle item="今日推荐" />	
			<TodayProvide />
		</div>
		<div class="bank">
			<LineTitle item="按银行选卡" />
			<MBankSelect :items="data.bankList" />
		</div>
		<div class="purpose">
			<LineTitle item="按用途选卡" />
			<BankPurpose :items="data.purposeList"/>
		</div>
		<div class="theme">
			<LineTitle item="按主题选卡" />
			<BankTheme :items="data.subjectList" />
		</div>
		<div class="hot">
			<LineTitle item="热门信用卡" />
			<CardList :items="data.hotCardList" />
		</div>
		<FootNav />
	</div>
	
</template>

<script>
	import axios from 'axios'
	import HeadBar from './HeadBar'
	import FootNav from './FootNav'
	import Banner from './Banner'
	import TodayProvide from './card/TodayProvide'
	import LineTitle from './card/line-title'
	import MBankSelect from './card/MBankSelect'
	import BankPurpose from './card/BankPurpose'
	import BankTheme from './card/BankTheme'
	import CardList from './CardList'
	
	
	export default {
		data(){
			return{
				data:{}
			}
		},
		components:{
			HeadBar,FootNav,Banner,LineTitle,TodayProvide,MBankSelect,BankPurpose,
			BankTheme,CardList
			
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
				let that = this
				axios.post("/api/creditcards/initData").then(function(response){
					that.data = response.data.data
					console.log(response.data.data.bankList)
				})
			
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
	margin: 0;
	margin-bottom:5rem;
	.title{
		background-color: white;
		margin-bottom: 2rem;
	}
	.bank{
		margin-top: -1.5rem;
	}
	.purpose,.hot{
		margin-top: 0.5rem;
	}
	.theme{
		margin-top: 0.5rem;
	}
}
</style>