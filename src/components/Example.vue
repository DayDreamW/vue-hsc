<!--展示页面-->
<template>
	<div class="wrap">
		<span>{{item}}</span>
	</div>
</template>

<script>
	import axios from 'axios'//引入axios
	import ListTitle from '../'//引入组件
	export default{
		data(){//获取数据
			return{
				item:''
			}
		},
		components:{//注册组件
			
		},
		created(){//调用方法
			this.getData();
		}
		methods:{//方法函数
			getData(){
				let that = this
				axios.post(url,{}).then(function(response){
					that.item = response.data
				})
			}
		}
		
	}
</script>

<style>
</style>