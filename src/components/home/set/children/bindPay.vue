<template>
	<div id='bindWechat'>
		<div>
			<input type="text" placeholder="请输入微信账号" ref='accout' />
		</div>
		<button @click='save()'>确定</button>
	</div>
</template>

<script>
	import axios from 'axios'	
	
export default {
  name: 'bindPay',
  data () {
  	document.title = "绑定微信账号"
    return {
		
    }
  },
  methods:{
  	save(){
  			var storage = window.localStorage;    
			var token = storage["token"];    
			var agentid = storage["agentid"]; 
  			var bindaccount = this.$refs.accout.value
  			console.log(bindaccount)
  			axios.get("http://118.190.132.104:8080/WRHAgent/addbindinfo",{params: {agentid:agentid,token:token,bindtype:1,bindaccount:bindaccount}}).then((res) =>{
    			if(res.data.code == 1){
    				this.$router.push('setBindPay')
    			}else{
    				console.log(res.data.msg)
    			}
    		})
  	}
  }

}
</script>

<style>
</style>