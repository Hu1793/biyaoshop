<template>
	<view>
		<home-search></home-search>
		<home-swiper></home-swiper>
		<home-grid></home-grid>
		<!-- <image class="bar_box" src="http://www.liwanying.top/applate-icon/bar.png" mode="widthFix"></image> -->
		<view class="tabs_box">
			<lyz-tabs type="scroll" v-model="tabIndex" @change="(item) => getTab(item.id)"
				:columns="fenlei2"></lyz-tabs>
		</view>
		<home-flow></home-flow>
	</view>
</template>

<script setup>
	import homeSearch from './components/home-search.vue'
	import homeSwiper from './components/home-swiper.vue'
	import homeGrid from './components/home-grid.vue'
	import homeFlow from './components/home-flow.vue'
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		getHome,
		getGoodList
	} from '@/api/api_method.js'
	let tabIndex = ref(0)
	let fenlei = ref([])
	let fenlei2 = ref([])
	const getTab = async (id) => {
		console.log(id)
		let res = await getGoodList()
		console.log(res);

	}
	const a = async () => {
		let remen = {
			title: '热门',
			id: ""
		}
		let res = await getHome()
		// console.log(res);
		fenlei.value = res.data.homeData.oneLevelCategoryList
		// console.log(fenlei.value);
		fenlei2.value = fenlei.value.map((ele) => {
			return {
				title: ele.categoryName,
				id: ele.categoryId
			}
		})
		fenlei2.value.unshift(remen)
		// console.log(fenlei2.value);
	}
	onLoad(() => {
		a()
	})
	// onLoad(){
	// 	this.a()
	// }
</script>

<style lang="scss" scoped>
	.bar_box {
		width: 100%;
		height: 140rpx;
	}

	.tabs_box {
		padding: 24rpx 0;
	}
</style>