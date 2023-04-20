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
export function getHomeList (page =1){
    return axios({
        method: 'get',
        url: "/by/hotList?page=" + page
    })
}


export function getGoodList (){
return axios({
	method:'get',
	url:'/by/goodList'
})
}