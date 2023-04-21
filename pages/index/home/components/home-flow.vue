<template>
	<view class="flow_box">
		<view class="safeBox" >
			<view class="shopbox" v-for="(item,index) in neirong" @click="tapClick(item.Id)">
				<image :src="item.imageUrl" mode="" class="img"></image>
					<p class="price">￥{{item.priceStr}}</p>
					<text class="baopin">爆品</text>
					<text class="yqp">一起拼</text>
					<p class="zzs">{{item.title}}</p>
					<p class="hp">{{item.evaluate}}条好评</p>
			</view>
		</view>
	</view>
</template>
<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue';
	import {getHomeList} from '@/api/api_method.js' 
	import { onLoad } from '@dcloudio/uni-app'
	
	let neirong = ref([])
	let page = ref(1)
	
	const a = async() => {
		let res = await getHomeList(page.value)
		// console.log(res);
		neirong.value=res.data
		console.log(neirong.value);
	}
	onLoad(() => {
	  a()
	})
	
	
	
	
	const tapClick = (item) => {
		console.log(item)
		uni.navigateTo({
			url: '/pages/goodsDetails/goodsDetails?id='+item
		})
	}
</script>
<style lang="scss" scoped>
	.flow_box {
		padding: 0 32rpx;
		.safeBox{
			width: 700rpx;
			margin: auto;
		}
		.shopbox{
			float: left;
			margin-right: 50rpx;
			margin-bottom: 30rpx;
			padding-bottom: 40rpx;
			
			.img{
				width: 300rpx;
				height: 250rpx;
			}
			.price{
				color: #f7a701;
			}
			.baopin{
				    background: rgb(171, 127, 209);
				    color: rgb(255, 255, 255);
				    border: 0.015rem solid rgb(171, 127, 209);
				    border-radius: 2px;
					margin-right: 20rpx;
					font-size: 20rpx
			}
			.yqp{
				    background: rgb(255, 255, 255);
				    color: rgb(251, 76, 129);
				    border: 0.015rem solid rgb(251, 76, 129);
				    border-radius: 2px;
					font-size: 20rpx
			}
			.zzs{
				    color:#4a4a4a;
				    margin-bottom: 0.08rem;
				    font-size: 24rpx;
			}
			.hp{
				    color: #bbbbbb;
				    font-size: 0.2rem;
				    padding-top: 0.06rem;
			}
		}
	
	}
</style>
