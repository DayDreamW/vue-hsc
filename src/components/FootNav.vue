<!--底部导航栏-->
<template>
	<div class="wrap">
	<ul>
		<li v-for="item in nav" @click="selectNav(item.title)">
			<router-link :to="accessToken ? item.route : item.route1">
				<img :src="isSelect === item.title ? item.url_one : item.url" alt="item.title" />
				<p :class="isSelect === item.title ? 'active' : ''">{{item.title}}</p>
			</router-link>
		</li>
	</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isSelect: '首页',
				nav: [
					{title: '首页', url: require('../assets/index.png'),url_one: require('../assets/indexActive.png'),route:'/',route1:'/'},
					{title: '借款', url: require('../assets/loan.png'),url_one: require('../assets/loanAcitve.png'),route:'/Loan',route1:'/Loan'},
					{title: '信用卡', url: require('../assets/card.png'),url_one: require('../assets/cardActive.png'),route:'/Card',route1:'/Card'},
					{title: '我的', url: require('../assets/index.png'),url_one: require('../assets/indexActive.png'),route:'/Mine',route1:'/Login'}
				]
			}
		},
		created(){
			this.fetchData()
		},
		watch: {
			'$route': 'fetchData'
		},
		computed:{
			accessToken: function() {
				return localStorage.getItem('accesstoken')
			}
		},
		methods: {
			selectNav (title) {
				this.isSelect = title
			},
			fetchData(){
//				let accessToken = localStorage.getItem(accesstoken)
				if(this.$route.path === '/'){
					this.isSelect = '首页'
				}
				else if(this.$route.path === '/Loan'){
					this.isSelect = '借款'
				}
				else if(this.$route.path === '/Card'){
					this.isSelect = '信用卡'
				}
				else if(this.$route.path === '/Mine'){
					this.isSelect = '我的'
				}
				
			}
		},
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		ul{
			margin: 0rem;
			padding-left: 0rem;
			position: fixed;
			bottom: 0rem;
			background-color: white;
			list-style-type: none;
			margin-left: 0rem;
			width: 100%;
			text-align: center;
			li{
				float: left;
				width: 25%;
				border-top: 1px solid #CCCCCC;
				a{
					text-decoration: none;
					color: #666666;
					.active{
						color: orangered;
					}
					img{
						margin-top: 0.25rem;
						width: 2rem;
						height: 2rem;
						margin-bottom: -0.5rem;
					}
					p{
						font-size: 0.8rem;
						line-height: 0.8rem;
						margin-bottom: 0.5rem;
					}
					
				}
			}
		}
	
	}
</style>