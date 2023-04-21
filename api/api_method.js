import axios from "./axios.js"
import ajax from './api'
// 首页列表
const baseUrl = "http://47.113.230.184:5566"

export function getHome() {
	return ajax({
		url: baseUrl,
		method: 'GET'
	})
};
export function getHomeList (page){
    return axios({
        method: 'get',
        url: "/by/hotList?page=" + page
    })
}


export function getGoodList (type_one){
return axios({
	method:'get',
	url:'/by/goodList',
	data:{
		type_one
	}
})
}

// 详情页
export function detail (id){
return axios({
	method:'get',
	url:'/by/detail?goodId='+id,
})
}

// 搜索页面
export function search (word){
return axios({
	method:'get',
	url:'/by/search?word='+word,
})
}