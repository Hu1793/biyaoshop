<template>
	<view style="padding: 24rpx 0 20rpx;" class="bgc_fff">
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item flexr-jsc flex-aic" v-for="(item,index) in banner">
				<image mode="aspectFill" class="swiper-item-img"
					:src="item">
				</image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {detail} from '@/api/api_method.js'
	import {onLoad} from '@dcloudio/uni-app';
	import {ref,reactive} from 'vue'
	
	let banner = ref([])
	
	 onLoad(async (options)=>{
		let ids=options.id
		let res =await detail(ids)
		
		let imgs = res.data[0].imgs
		// console.log(JSON.parse(imgs) );
		banner.value= JSON.parse(imgs)
		
	})
 	
</script>

<style lang="scss" scoped>
.swiper {
		height: 560rpx;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
		.swiper-item-img {
			width: 686rpx;
			border-radius: 10rpx;
			height: 100%;
		}
	}
</style>