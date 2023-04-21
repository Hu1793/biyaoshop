<template>
	<view>
		
		
	
		<view class="goods_search_box bgc_fff flex-aic flexr-jsc">
			<view class="search_box pos_r boxs_bb">
				<image class="search_icon pos_a" src="http://www.liwanying.top/applate-icon/icon_search.png" mode=""></image>
				<input class="search_input bgc_f8f8f8 boxs_bb" placeholder="请输入商品"/>
			</view>
		</view>
		<view class="qq">
			<view class="qqq">
				<view class="kk"  v-for="(item,index) in shuju" :key="index" >
					 <view class="oo" @click="dd(item)">
						{{item}}
					</view>
				</view>
			</view>
			<view class="ppp">
				<view >
					{{name}}
				</view>
				<view class="gengduo">
						<view class="geng">
							<text>{{name}}</text>
							<text>更多</text>
						</view>
						<view >
							<view >
				<button class="wws" @click="ddd(item)" v-for="(item,index) in neishuju" :key="index" > {{item}}</button>
									<view v-for="(ii,cc) in neishuju2" :key="cc" >
										<view >
											<image :src="ii.imageUrl" mode=""></image>
										</view>
										{{ii.title}}
									</view>
							</view>
						</view>
				</view>
			</view>
		</view>
		
		<lyz-tab-bar pagePath="pages/tabbar/good/good"></lyz-tab-bar>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import {ref ,watch} from 'vue'
import {getGoodList,getTypeTwo, goodList,getTypeTwoList} from '@/api/api_method.js'
	let shuju = ref([])
	let neishuju = ref([])
	let neishuju2 = ref([])
	let neishuju3 = ref('')
	let name = ref('个护')
	let canshu1 = ref('')
	let canshu2 = ref('')
	let canshu3 = ref('')
	const ass = async() =>{
		 let add = await getGoodList()
		 console.log(add.data);
			shuju.value = add.data
		}
	 let  dd = (x)=>{
		 console.log(neishuju3.value);
		neishuju2.value = []
		console.log(canshu1.value);
			name.value = x
			
		aa(x),
		aaa(name.value,neishuju3.value)
	}
	let  ddd = (x)=>{
		console.log(x);
		aaa(name.value,x)
		
		
	
	}
	const aa = async(x) =>{
			 let add = await getTypeTwo(x)
			 console.log(add);
			 console.log(add.data[0]);
				neishuju.value = add.data
				neishuju3.value = add.data[0]
			}
	const aaa = async(a,aa) =>{
			 let add = await getTypeTwoList(a,aa)
			 console.log(add.data);
			neishuju2.value = add.data
				
			}

		onLoad(()=>{
			console.log(name.value);
				aa(name.value),
			ass()
		
			
		})
</script>

<style lang="scss" scoped>
	.wws{
		width: 100%;
		text-align:center;
		
	}
	.qq{
		width: 100vw;
		display: flex;
		justify-content: space-around;
	}
	.qqq{
		width: 30%;
		display: block;
		.kk{
			width: 100%;
			.oo{
				padding: 10rpx 0;
			}
		}
	}
	.ppp{
		width: 70%;
		text-align: center;
	}
	.integral_user {
		padding: 28rpx 32rpx 0;
		height: 228rpx;
		margin-bottom: 68rpx;
	}
	.goods_search_box {
		position: sticky;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		z-index: 1;
		width: 100%;
		height: 112rpx;
	}
	.integral_user_img {
		width: 96rpx;
		height: 96rpx;
		border-radius: 50%;
		overflow: hidden;
	}

	.integral_turn_img {
		bottom: -68rpx;
		width: 702rpx;
		height: 136rpx;
	}
	.search_box {
		width: 686rpx;
	}
	.search_icon {
		top: 18rpx;
		left: 32rpx;
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
