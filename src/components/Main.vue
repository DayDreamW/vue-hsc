<!--首页-->
<template>
	<div class="wrap">
		<HeadBar title="汇生财"/>
		<div class="topTop">
			<Banner :items="data"/>
			<messageScroll />
		</div>
		<div class="main">
			<MainList />
			<FootNav />
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import HeadBar from './HeadBar.vue'
	import MainList from './MainList.vue'
	import FootNav from './FootNav'
	import Banner from './main/Bannder'
	import messageScroll from './main/messageScroll'
	export default {
		components:{
			HeadBar,MainList,FootNav,Banner,messageScroll
		},
		data( ){
			return{
				data:""
			}
		},
		props:{
			
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
			let that = this
			axios.post("/api/index/getBannerList").then(function(response){
//				console.log(response.data.msg)
				that.data = response.data.data.banner
			})
		}
		}
		
	}
</script>

<style lang="scss" scoped>
	.wrap{
		width: 100%;
		height: 100%;
		margin: 0rem;
		margin-bottom: 4rem;
		.topTop{
			background-color: white;
		}
		.main{
			margin-top: -0.2rem;
		}
		/*display: flex;*/
	}
</style>