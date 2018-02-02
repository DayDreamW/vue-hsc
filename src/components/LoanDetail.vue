<template>
	<div class="wrap">
		<div class="popDiv">
			<div class="selectDiv">
				<select>
					<option v-for="item in money_nums" value="item">{{item}}元</option>
				</select>
				<select ref="select1"  @change="changevalue()">
					<option  v-for="item in data.deadline":value="item.index">{{item}}天</option>
				</select>
				<div></div>
			</div>
			<div class="sunNumber">
				<div class="n-item">
					<span><b>98.33</b></span><br/>
					<span>每月应还(元)</span>
				</div>
				<div class="n-item">
					<span><b>180.0</b></span><br/>
					<span>利息(元)</span>
				</div>
				<div class="n-item">
					<span><b>{{rate_num}}%</b></span><br/>
					<span>月利率</span>
				</div>
			</div>
		</div>
		<!--<div class="head">
			<p>{{data.name}}</p>
			<img src="../assets/arrow-backblack.png" @click="goback"/>
		</div>-->
		<TitleBack :item="data.name"/>
		<div class="top">
			<img :src="data.image_url"/>
			<div class="top-right">
				<span>已放款：{{data.loan_number}}人</span><br/>
				<span>借款期限：{{data.deadline_sml}}-{{data.deadline_big}}天</span><br/>
				<span>借款范围：{{data.money_sml}}-{{data.money_big}}元</span>
			</div>
		</div>
		<div class="center">
			<detailTitleLine title="申请流程"/>
			<div v-for="item in data.material">
				<img :src="item.url"/><br/>
				<span>{{item.name}}</span>
			</div>
		</div>
		<div class="bottom">
			<div class="bottom-item" v-if="data.application_procedure">
				<detailTitleLine title="申请条件"/>
				<div v-html="data.application_procedure"></div>
			</div>
			<div class="bottom-item" v-if="data.product_description">
				<detailTitleLine title="产品说明"/>
				<div v-html="data.product_description"></div>
			</div>
			<div class="bottom-item" v-if="data.repayment_instructions">
				<detailTitleLine title="还款说明"/>
				<div v-html="data.repayment_instructions"></div>
			</div>
		</div>
		<button>立即申请</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import HeadBar from '../components/HeadBar'
	import detailTitleLine from '../components/detailTitleLline'
	import TitleBack from './TitleBack'
	export default {
		data() {
			return{
				data:{},
				money_num:[],
				time_num:[],
				rate:[],
				index:0
			}
		},
		computed: {
			money_nums:function(){
				let numList = []
				for(let i=this.data.money_big;i>this.data.money_sml;i-=500){
					numList.push(i);
				}
				return numList;
			},
			rate_num:function(){
				console.log(this.index)
				return this.rate[this.index]
			}
		},
		components:{
			HeadBar,detailTitleLine,TitleBack
		},
		created(){
			this.getData()
		},
		methods: {
			getData(){
				let that = this 
				let id = this.$route.query.id 
				let url = '/api/loans/getLoansDetail?id='+id
				axios.get(url).then(function(response){
					that.data = response.data.data
					that.rate = response.data.data.rate
				})
				.catch(function(error){
					console.log(err)
				});
			},
			goback(){
				this.$router.go(-1)
			},
			changevalue(event){
				this.index = this.$refs.select1.selectedIndex
//				console.log(this.index)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		position: relative;
		button{
			width: 100%;
			height: 3rem;
			font-size: 1.2rem;
			background-color: #FF5454;
			color: white;
			position: fixed;
			bottom: 0rem;
			border: none;
		}
		.popDiv{
			position: absolute;
			top: 7.5rem;
			z-index: 999;
			background:url(../assets/whitewave.png) 0 0 no-repeat;
			background-size:contain;
			width: 90%;
			height: 100%;
			margin-bottom: 2rem;
			margin-left: 5%;
			.sunNumber{
				border-top:solid #CCCCCC 1px;
				margin:0 0.4rem;
				padding-top: 1.5rem;
				position:relative;
				overflow: hidden;
				clear: both;
				margin-top:2rem;
				
				.n-item{
					float: left;
					width: 33%;
					text-align: center;
					span{
						font-size: 0.8rem;
						b{
							font-size: 1.22rem;
							color: #FF5454;
							line-height: 1.8rem;
						}
					}
				}
			}
			.selectDiv{
				width:80%;
				margin-left:10%;
				margin-top:2rem;
				overflow: hidden;
				select{
					width:6.8rem;
					border: none;
					background-color: #FF5454;
					color: white;
					padding: 0.25rem 1rem;
					float: left;
					border-radius: 0.25rem;
					
				}
				select+select{
					float: right;
				}
			}
		
		}
		
		.top{
			background: url(../assets/detailCont.png) 0 0 no-repeat;
			width: 100%;
			clear: both;
			margin-top: 2.5rem;
			overflow: hidden;
			color: white;
			font-size: 0.8rem;
			line-height: 1.6rem;
			img{
				margin: 1rem;
				width: 7rem;
				border: 0.5rem solid #fdbb48;
				border-radius: 50%;
				float: left;
				
			}
			.top-right{
				margin-right: 2rem;
				margin-top: 2.5rem;
			}
		}
		.center{
			background-color: white;
			padding: 1rem;
			overflow: hidden;
			margin-bottom: 0.5rem;
			padding-top: 11.5rem;
			div{
				float: left;
				font-size: 0.4rem;
				color: #666666;
				text-align: center;
				margin-right: 2rem;
				margin-top: 2rem;
				img{
					width: 2.5rem;
					height: 2.5rem;
				}
			}
		}
		.bottom{
			margin-bottom: 3rem;
			.bottom-item{
				padding-left: 1rem;
				padding-top: 1.5rem;
				background-color: white;
				div{
					font-size:0.8rem;
					margin-left: 1rem;
					padding-bottom: 1rem;
					margin-bottom: 0.5rem;
				}
			}
		}
		
	}
	
</style>