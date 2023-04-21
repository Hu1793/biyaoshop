<template>
	<view>
		<h1>搜索页面</h1>
		<view class="safe">
			<view class="shop" v-for="(item,index) in list" @click="todetail(item.Id)">
				<image class="img" :src="item.imageUrl" mode=""></image>
				<text class="wenzi1">{{item.title}}</text>
				<text class="price">￥{{item.priceStr}}</text>
			</view>
			
		</view>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import {search} from '@/api/api_method.js'
	import {ref,reactive} from 'vue'
	
	let list = ref([])
	
	let todetail=(id)=>{
		console.log(id);
		uni.navigateTo({
			url:'/pages/goodsDetails/goodsDetails?id='+id
		})
	}
	
	onLoad(async(options)=>{
		console.log(options);
				let res = await search(options.title)
				console.log(res);
				list.value=res.data
			
	})
</script >

<style lang="scss" scoped>
 .safe{
	 width: 700rpx;
	 margin: auto;
	 .shop{
		 width: 200rpx;
		 margin-bottom: 20rpx;
		 float: left;
		 margin-right: 150rpx;
		 .img{
			 width: 400rpx;
			 height: 300rpx;
		 }
		 text{
			 display: block;
		 }
		 .wenzi1{
			 font-size: 20rpx;
			 text-align: center;
		 }
		 
	 }
 }
</style>
