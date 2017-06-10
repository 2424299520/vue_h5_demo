<template>
	<div id='depositDetail'>
		<p class='tip'>提现通知</p>
		<p>提现金额：{{tellList.account}}</p>
		<p>提现方式：{{agenttype}}</p>
		<p>微信号：{{tellList.bind_account}}</p>
		<p>提现时间：{{tellList.deal_time}}</p>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	  name: 'depositDetail',
	  data () {
	  	document.title = "提现详情"
	    return {
			tellList : ''
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
			var noticeid = this.$route.params.noticeId
			console.log(noticeid)
			axios.get("http://118.190.132.104:8080/WRHAgent/getwithdrawdetail",{params: {agentid:agentid,token:token,noticeid:noticeid}}).then((res) => {
		          if(res.data.code == 1){
		          	console.log("success")
		          	console.log(res.data.data)
		          	this.tellList = res.data.data
		          }else{
					console.log(res.data)
		          }
		      })
		}
	  },
	  	computed :{
		  	agenttype : function(){
						if(this.tellList.bind_type == 0){
							return "微信提现"
						}else if(this.tellList.bind_type == 1){					
							return "支付宝提现"
						}else if(this.tellList.bind_type == 2){
							return "银行卡提现"
						}
		  	},

		  }
	}	
</script>

<style>
</style>