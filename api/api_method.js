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
export function getHomeList (x){
    return axios({
        method: 'GET',
        url:"/by/hotList?page="+x
    })
}
export function getGoodList (){
return axios({
	method:'GET',
	url: '/by/getTypeOne'
})
}
export function  getTypeTwo (x){
return axios({
	method:'GET',
	url:'/by/getTypeTwo?type_one='+x
})
}
export function  getTypeTwoList (x,xx){
return axios({
	method:'GET',
	url: '/by/getTypeTwoList?type_one=' + x + '&type_two=' + xx
})
}
export function goodList (x){
return axios({
	method:'GET',
	url: '/by/goodList?type_one='+x
})
}
export function getTypeOne (x){
return axios({
	method:'GET',
	url: '/by/getTypeOne?type_one='+x
})
}
export function login(x,xx){
return axios({
	method:'GET',
	url: '/by/login?userName='+x+'&password='+xx
	
})
}
export function register(x,xx){
return axios({
	method:'GET',
	url: '/by/register?userName='+x+'&password='+xx
	
})
}