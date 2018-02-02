import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Loan from '@/components/Loan'
import Card from '@/components/Card'
import Mine from '@/components/Mine'
import LoanDetail from '@/components/LoanDetail'
import OpenCard from "@/components/card/BankOpen"
import AllBanks from '@/components/card/AllBanks'
import Login from '@/components/login/Login'
import loginMine from '@/components/mine/loginMine'
import personCard from '@/components/mine/personCard'
import investPeople from '@/components/mine/investPeople'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
    	path: '/Loan',
    	name: 'Loan',
    	component: Loan
    },
    {
    	path: '/Card',
    	name: 'Card',
    	component: Card
    },
    {
    	path: '/Mine',
    	name: 'Mine',
    	component: Mine
    },
    {
    	path: '/loan/productdetail',
    	name: 'LoanDetail',
    	component: LoanDetail
    },
    {
    	path:'/Card/OpenCard',
    	name:'OpenCard',
    	component: OpenCard
    },
    {
    	path:'/Card/AllBanks',
    	name:'AllBanks',
    	component: AllBanks
    },
    {
    	path:'/Login',
    	name:'Login',
    	component:Login
    },
    {
    	path:'/loginMine',
    	name: 'loginMine',
    	component: loginMine
    },{
    	path:'/Mine/personCard',
    	name:'personCard',
    	component: personCard
    },
    {
    	path:'/Mine/investPeople',
    	name:'investPeople',
    	component:investPeople
    }
  ]
})
