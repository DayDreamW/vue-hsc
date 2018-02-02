<template>
	<div class="wrap">
		<TitleBack item="登录"/>
		<div class="content">
			<img src="../../assets/cardorang.png" />
			<input placeholder="请输入手机号" v-model="phone"/>
		</div>
		<div class="content">
			<img src="../../assets/cardorang.png" />
			<input placeholder="请输入短信验证码" v-model="vValue"/>
			<button type="button" @click="cutDown">{{verification}}</button>
		</div>
		<button type="button" @click="login">登录</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import TitleBack from '../TitleBack'
	export default {
		data(){
			return{
				id:'',
				phone:'',
				vValue:'',
				verification:'获取验证码'
				
			}
		},
		components:{
			TitleBack
		},
		methods:{
			cutDown(){
				let seconed = 60
				let that = this
				if(this.phone === '')
				{
					alert("请输入手机号")
				}else{
					this.getData()
					let time = setInterval(function(){
					seconed = seconed - 1
					that.verification = seconed + '秒'
					if(seconed <= 0){
						clearInterval(time)
					that.verification = "重新发送"
					}
					
					},1000)
				}
				
				
			},
			getData(){
				let that = this 
				let url = '/api/mobileCode/getMobileCode?mobile='+that.phone
				axios.post(url).then(function(response){
					console.log("验证码已发送！")
				})
			},
			getData1(){
				let that = this
				let url="/api/mobileCode/checkSmsCode?mobileCode="+this.vValue+"&mobile="+this.phone
				axios.post(url).then(function(response){
					localStorage.setItem('accesstoken',that.phone)
					console.log(localStorage.getItem(accesstoken))
					alert("登录成功！")
					that.$router.push({
						path: '/loginMine'
					})
					
				})
			},
			login(){
				if(this.phone === ''){
					alert("请输入手机号")
				}else if(this.vValue === ''){
					alert("请输入验证码")
				}else{
					this.getData1()
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap{
		margin: 0;
		background-color: white;
		padding-top:0.8rem;
		padding-bottom: 1.3rem;
		
		.content{
			margin: 0.5rem;
			width: 100%;
			border-bottom:1px solid #F4F2F0;
			padding-bottom:0.5rem;
			img{
				width: 1.5rem;
				vertical-align: middle;
			}
			input{
				border: none;
				outline: none;
				padding-left: 0.5rem;
			}
			button{
				border: none;
				background-color: #ffbd3a;
				padding: 0.3rem 0.5rem;
				border-radius: 0.2rem;
				color: white;
				float: right;
				margin-right: 1rem;
				outline: none;
				width: 6rem;
				height:1.7rem;;
			}
		}
		&>button{
			border: none;
			background:-webkit-gradient(linear, 0% 0%, 100% 0%,from(#ff4844), to(#ffbd3a));
			color: white;
			width: 80%;
			margin: 0 10%;
			margin-top: 2rem;
			padding: 0.5rem 0;
			font-size:1rem;
			border-radius: 1rem;
			outline: none;
			
		}
	}
</style>