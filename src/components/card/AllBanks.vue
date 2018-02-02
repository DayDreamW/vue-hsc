<template>
	<div class="wrap">
		<TitleBack item="全部银行"/>
		<BankSelect />
	</div>
</template>

<script>
	import axios from 'axios'
	import TitleBack from '../TitleBack'
	import BankSelect from './BankSelect'
	export default {
		components:{
			TitleBack,BankSelect
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		margin: 0;
	}
</style>