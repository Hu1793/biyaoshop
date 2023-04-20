<template>
	<view>
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item flexr-jsc flex-aic" v-for="(item,index) in bannerList">
				<image mode="aspectFill" class="swiper-item-img"
					:src="item.image" >
				</image>
			</swiper-item>
		<!-- 	<swiper-item class="swiper-item flexr-jsc flex-aic">
				<image mode="aspectFill" class="swiper-item-img"
					src="https://img.zcool.cn/community/011fc458b9313da801219c7788e1e1.jpg@1280w_1l_2o_100sh.jpg">
				</image>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script setup>
	import {getHome} from '@/api/api_method.js'
	import {ref,reactive} from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	let bannerList = ref([])
	
	let banner=async()=>{
		let res = await getHome()
		console.log(res);
		bannerList.value=res.data.homeData.banners
		console.log(bannerList.value);
	}
	
	onLoad(()=>{
		banner()
	})
</script>

<style lang="scss" scoped>
.swiper {
		height: 304rpx;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
		.swiper-item-img {
			width: 686rpx;
			height: 100%;
		}
	}
</style>