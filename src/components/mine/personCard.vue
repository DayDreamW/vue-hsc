<template>
	<div class="wrap">
		<TitleBack item="个人资料" />
		<div class="items">
			<div class="item">
				<label>手机号码</label>
				<input  placeholder="请输入您的手机号"/>
			</div>
			<div class="item">
				<label>姓名</label>
				<input  placeholder="请输入您的姓名"/>
			</div>
			<div class="item">
				<label>身份证号</label>
				<input  placeholder="请输入您的身份证号"/>
			</div>
			<div class="item">
				<label>学历</label>
				<img src="../../assets/arrow-right.png" />
			</div>
			<div class="item">
				<label>婚姻状况</label>
				<img src="../../assets/arrow-right.png" />
			</div>
			<div class="item">
				<label>职业身份</label>
				<img src="../../assets/arrow-right.png" />
			</div>
			<div class="item">
				<label>所在城市</label>
				<img src="../../assets/arrow-right.png" />
			</div>
		</div>
		<p>注:完善资料有助于系统推荐您更适合的贷款产品</p>
		<button type="button">保存</button>
	</div>
</template>

<script>
	import TitleBack from '../TitleBack'
	export default {
		components:{
			TitleBack
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin:0rem;
		
		.items{
			background-color: white;
			margin-top:2.5rem;
			.item{
				
				padding:0.8rem 1rem;
				color: #999999;
				font-size: 0.7rem;
				border-bottom: solid #F4F2F0 1px;
				input{
					border: none;
					outline: none;
					float: right;
					text-align: right;
					color: black;
					font-size: 0.7rem;
					&::-webkit-input-placeholder { /* WebKit browsers */  
					  color: #999999; 
					  font-size: 0.7rem; 
					}  
					&:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
					  color: #999999;  
					  font-size: 0.7rem; 
					}  
					&::-moz-placeholder { /* Mozilla Firefox 19+ */  
					  color: #999999;  
					  font-size: 0.7rem; 
					}  
					&:-ms-input-placeholder { /* Internet Explorer 10+ */  
					  color: #999999;  
					  font-size: 0.7rem; 
					}  
				}
				img{
					float: right;
					width: 0.6rem;
				}
			}
		}
		p{
			font-size: 0.7rem;
			color: #FF0000;
			margin-left:1rem;
		}
		button{
			margin-top: 3rem;
			border-radius: 1rem;
			width: 80%;
			margin-left: 10%;
			border: none;
			outline: none;
			background:-webkit-gradient(linear, 0% 0%, 100% 0%,from(#ff4844), to(#ffbd3a));
			padding: 0.5rem 0;
			font-size: 1.2rem;
			color: white;
		}
	}
</style>