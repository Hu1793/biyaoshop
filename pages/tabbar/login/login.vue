<template>
	<view class="box">
		<view class="one">
			<view class="uni-form-item uni-column">
				<text>账号：</text>
				<input class="uni-input"  @input="onKeyInput" placeholder="输入账号" />
			</view>
			<view class="uni-form-item uni-column">
				<text>密码：</text>
				<input class="uni-input"  @input="onKeyInput1" placeholder="输入密码" />
			</view>
			<button class='bbb' @click="dl" type="primary" plain="true">登录</button>
			<button class='bbb' @click="zc" type="primary" plain="true">注册</button>
		</view>
	</view>
</template>
<script setup>
	import {login,register} from '@/api/api_method.js'
	import { onLoad } from '@dcloudio/uni-app'
	import {ref} from 'vue'
	
	let usename = ref('namein')
	let passwod = ref('123456')
	let onKeyInput = (e) => {
		console.log(e);
		usename.value = e.detail.value
	}
	let onKeyInput1 = (e) => {
		console.log(e);
		passwod.value = e.detail.value
	}
	let dl = () =>{
		console.log(usename.value);
		console.log(passwod.value);
		ass(usename.value,passwod.value)
	}
	let zc = () =>{ 
		console.log(usename.value);
		console.log(passwod.value);
		ss(usename.value,passwod.value)
	}
	const ass = async(x,xx) =>{
		 let add = await login(x,xx)
		 console.log(add);
		 console.log(add.data);
		 if(add.data.token){
			 console.log('成功');
			uni.reLaunch({
				url:'/pages/tabbar/my/my?a='+add.data.userName+'&aa='+add.data.token
			})
		 }else{
			  console.log('失败');
		 }
		}
	const ss = async(x,xx) =>{
		let add = await register(x,xx)
		console.log(add.data.code);
		if(add.data.code == '1'){
			
				alert('注册成功')
		
		}else{
			alert('账号被注册了')
		}
			
		}
	onLoad(()=>{
		
	})
</script>

<style>
	.box {
		width: 100vw;
	}

	.uni-input {
		width: 50%;
		margin: 30rpx;
	}

	.uni-form-item {
		display: flex;
		align-items: center;
		margin-left: 40rpx;
	}
</style>