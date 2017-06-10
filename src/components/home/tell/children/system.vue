<template>
	<div id='system'>
		<div class='box' v-for='list in tellList'>
			<p>举报反馈</p>
			<p>{{list.noticeTime}}</p>
			<p class='textL'>{{list.noticeCon}}</p>
			<div class='row-line'></div>
			<p>查看详情 <span>></span></p>
			<router-link :to="{name : 'systemDetail',params : {noticeTime :list.noticeTime,noticeCon :list.noticeCon}}"></router-link>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	  name: 'system',
	  data () {
	  	document.title = "系统通知"
	    return {
			tellList : ''
	    }
	  },
	  created() {
  		this._init()
  		},
	  methods :{
		_init(){
			var agentid = this.$route.query.agentid
			var token = this.$route.query.agentid
			axios.get("http://118.190.132.104:8080/WRHAgent/getnoticebytype",{params: {agentid:agentid,token:token,type:1,pageno:1,pagesize:15}}).then((res) => {
		          if(res.data.code == 1){
		          	console.log("success")
		          	console.log(res.data.data)
		          	this.tellList = res.data.data
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