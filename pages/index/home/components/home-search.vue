<template>
	<view class="search_box bgc_fff">
		<image class="search_icon pos_a" src="http://www.liwanying.top/applate-icon/icon_search.png" mode=""></image>
		<input class="search_input bgc_f8f8f8 boxs_bb" @input="input" confirm-type="search" @confirm="doSearch" v-model="title" placeholder="请输入商品"/>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import {search} from '@/api/api_method.js'
	let title=ref('')
	let sousuo=ref('')
	
	let input=()=>{
			if(title.value==''){
				console.log('不能为空');
			}else{
				sousuo.value=title.value
			}
	}
	let doSearch=()=>{
		
		uni.navigateTo({
			url:'/pages/sousuo/sousuo?title='+sousuo.value
		})
	}
	
</script>

<style lang="scss" scoped>
.search_box {
	position: sticky;
	/* #ifdef H5 */
	top: var(--window-top);
	/* #endif */
	/* #ifndef H5 */
	top: 0;
	/* #endif */
	z-index: 1;
	padding: 32rpx 32rpx 24rpx 32rpx;
}
.search_icon {
	top: 50rpx;
	left: 64rpx;
	width: 40rpx;
	height: 40rpx;
}
.search_input {
	width: 100%;
	display: block;
	height: 76rpx;
	border-radius: 76rpx;
	padding-left: 88rpx;
}
</style>