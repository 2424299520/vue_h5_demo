<template>
	<div id='system'>
		<div class='box' v-for='list in tellList'>
			<p>举报反馈</p>
			<p>{{list.noticeTime}}</p>
			<p class='textL'>{{list.noticeCon}}</p>
			<div class='row-line'></div>
			<p>查看详情 <span>></span></p>
			<router-link :to="{name : 'depositDetail',params : {noticeId :list.noticeId}}"></router-link>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	  name: 'deposit',
	  data () {
	  	document.title = "系统通知"
	    return {
			tellList : '',
			tokenThat : ''
	    }
	  },
	  created() {
  		this._init()
  		},
	  methods :{
		_init(){
			var storage = window.localStorage;   
			var agentid = storage["agentid"];    
			var token = storage["token"];    
			
			axios.get("http://118.190.132.104:8080/WRHAgent/getnoticebytype",{params: {agentid:agentid,token:token,type:0,pageno:1,pagesize:15}}).then((res) => {
		          if(res.data.code == 1){
		          	console.log("success")
		          	console.log(res.data.data)
		          	this.tellList = res.data.data
		          	this.tokenThat = token
		          	console.log(this.tokenThat)

		          }else{
					console.log(res.data)
		          }
		      })
		}
	  }
	
	}	
</script>

<style>
</style>