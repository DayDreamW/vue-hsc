<template>
	<div class="wrap">
	 <swiper :options="swiperOption">
        <swiper-slide v-for="item in items" :key="item.slideUrl">
        <a v-if="accessToken" :href="item.slideUrl">
        	<img :src="item.slidePic" alt="item.slideName"/>
        </a>
        <router-link v-if="!accessToken" to='/Login'>
        	<img :src="item.slidePic" alt="item.slideName"/>
        </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
	export default {
	  data(){
	  	return{
	  		swiperOption: {
 	  			 slidesPerView: 1,   
		         loop: true,
		         pagination: {
		            el: '.swiper-pagination',
		            clickable: true
		          },
		           autoplay: {
			            delay: 2500,
			            disableOnInteraction: false
			        }
	  		}
	  	}
      },
      props:['items'],
      components: {
	    swiper,
	    swiperSlide
	  },
	  computed:{
	  	accessToken:function(){
	  		return localStorage.getItem('accesstoken')
	  	}
	  }
}
</script>

<style lang="scss" scoped>
	.wrap{
		margin-top:2.6rem;
		width: 100%;
		margin-bottom: 0rem;
		overflow: hidden;
		img{
			width: 100%;
			height: 10rem;
		}
	}
</style>