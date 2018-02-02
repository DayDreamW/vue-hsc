 <!--信用卡列表组件-->
<template>
	<div class="wrap">
		<a v-for="item in items" :href="item.linkUrl">
			<li :href="item.linkUrl">
			<p class="title-line">
			
				<span>{{item.name}}</span>
				<span><b>{{item.applicants}}人</b>申请成功</span>
			</p>
			<P class="summary">{{item.summary}}</P>
			<p class="point">
				<span><img src="../assets/cardorang.png">{{item.pointsOne}}</span>
				<span><img src="../assets/cardorang.png">{{item.pointsTwo}}</span>
			</p>
			<div class="item-bottom">
				<div class="imgclip"><img :src="item.img" /></div>
				<div class="card-label">
					<span class="label1">{{item.labelsOne}}</span><br/>
					<span class="label2">{{item.labelsTwo}}</span>
				</div>
			</div>
			</li>
		</a>
	</div>
</template>

<script>
	export default {
		props:['items']
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
		a{
			text-decoration: none;
		li{
			
			padding: 0 1rem;
			padding-top: 0.5rem;
			margin-bottom: 0.4rem;
			list-style-type: none;
			background-color: white;
			
			text-decoration: none;
			color: black;
			 .item-bottom{
				.imgclip{
					height:4.5rem;
					overflow: hidden;
					img{
					width: 50%;
				}
				}
				
				.card-label{
					text-align: right;
					float: right;
					margin-top:-3rem;
					font-size: 0.8rem;
					.label1{
						display: inline-block;
						color: orangered;
						margin-bottom: 0.5rem;
					}
					.label2{
						color: mediumspringgreen;
					}
				}
			}
			.point{
				font-size: 0.8rem;
				img{
					width: 1rem;
					display: inline-block;
					margin-right: 0.3rem;
					height: auto;
				}
				span+span{
					img{
						margin-left: 2rem;
					};
				}
			}
			.summary{
				font-size: 1.1rem;
				color:orangered;
				line-height: 1.1rem;
			}
			.title-line{
				span{
					display:inline-block;
					font-size:0.8rem;
				}
				span+span{
					float:right;
					b{
						color:orangered;
					}
				}
			}
		}}
	}
</style>