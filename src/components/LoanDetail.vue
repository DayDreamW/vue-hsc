<template>
	<div class="wrap">
		<!--最外层的波浪形框-->
		<div class="popDiv">
			<div class="selectDiv">
				<select ref='select_money' @change="changeMoney()">
					<option v-for="item in money_nums" :value="item">{{item}}元</option>
				</select>
				<select ref="select1"  @change="changevalue()">
					<option  v-for="item in data.deadline" :value="item">{{item}}{{rate_type?'天':'个月'}}</option>
				</select>
			</div>
			<div class="sunNumber">
				<div class="n-item">
					<span><b>{{repay.toFixed(2)}}</b></span><br/>
					<span>每{{rate_type?'日':'月'}}应还(元)</span>
				</div>
				<div class="n-item">
					<span><b>{{allRate}}</b></span><br/>
					<span>总利息(元)</span>
				</div>
				<div class="n-item">
					<span><b>{{rate_num}}%</b></span><br/>
					<span>{{rate_type?'日':'月'}}利率</span>
				</div>
			</div>
		</div>
		<!--页面标题及页面上部分内容-->
		<TitleBack :item="data.name"/>
		<div class="top">
			<img :src="data.image_url"/>
			<div class="top-right">
				<span>已放款：{{data.loan_number}}人</span><br/>
				<span>借款期限：{{data.deadline_sml}}-{{data.deadline_big}}{{rate_type?'天':'个月'}}</span><br/>
				<span>借款范围：{{data.money_sml}}-{{data.money_big}}元</span>
			</div>
		</div>
		<!--静态内容显示-->
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
		<router-link to="/Login" v-if="!accessToken">
			<button type="button">立即申请</button>
		</router-link>
		<a v-if="accessToken" :href="data.jump_url">
			<button type="button">立即申请</button>
		</a>
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
				index:0,
				calMoney:0,
				calTime:0
				
			}
		},
		computed: {
			money_nums:function(){
				let numList = []
				for(let i=this.data.money_big;i>=this.data.money_sml;i-=this.data.rising_range){
//					console.log(i);
					numList.push(i);
				}
				return numList;
			},
			rate_num:function(){
//				console.log(this.index)
				return this.rate[this.index]
			},
			rate_type:function(){
				if(this.data.rate_type == '1'){
					return true
				} else{
					return false
				}
			},
			allRate:function(){
//				console.log('this.time_num'+this.time_num)
				return (Number(this.rate_num)*Number(this.calMoney)*Number(this.calTime)*0.01).toFixed(2)
			},
			repay:function(){
//				console.log('allRate: '+this.allRate+Number(this.calMoney))
				return (Number(this.allRate)+Number(this.calMoney))/Number(this.calTime)
			},
			accessToken:function(){
				return localStorage.getItem('accesstoken')
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
					that.calMoney = response.data.data.money_big
					that.calTime = response.data.data.deadline_big
				})
				.catch(function(error){
					console.log(err)
				});
			},
			goback(){
				this.$router.go(-1)
			},
			changevalue( ){
				
				this.index = this.$refs.select1.selectedIndex
				this.calTime = this.$refs.select1.value
				
			},
			changeMoney(){
				console.log(this.$refs.select_money.value)
				this.calMoney = this.$refs.select_money.value
			},
			apply(){
				
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
			background-size:100%;
			padding-bottom: 1rem;
			padding-right: 1rem;
			width: 87%;
			height: 11rem;
			margin-left: 4.5%;
			.sunNumber{
				margin:0 0.4rem;
				
				position:relative;
				overflow: hidden;
				clear: both;
				margin-top:2rem;
				width:100%;
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
							font-weight: normal;
						}
					}
				}
				.n-item+.n-item{
					border-left: solid #F4F2F0 1px;
				}
			}
			.selectDiv{
				width:85%;
				margin-left:7.5%;
				border-bottom: 1px solid #F4F2F0;
				padding-bottom: 1rem;
				margin-top:2rem;
				overflow: hidden;
				select{
					width:7.8rem;
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