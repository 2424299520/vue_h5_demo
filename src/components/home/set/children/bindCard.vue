<template>
	<div id='bindCard'>
		<div>
			<p>
				<span>持卡人：</span><input type="" name="" id="" ref='cardowner'/>
			</p>
			<p>
				<span>银行卡号：</span><input type="" name="" id="" ref='cardno' />
			</p>
			<p>
				<span>所属银行：</span><input type="" name="" id="" ref='bankname' />
			</p>
			<p>
				<span>开户地：</span><input type="" name="" id="" ref='bankarea' />
			</p>
			<p>
				<span>开户支行：</span><input type="" name="" id="" ref='bankbranch' />
			</p>			
		</div>
		<button @click='save()'>确定</button>
	</div>
</template>

<script>
	import axios from 'axios'	
	
	export default {
	  	name: 'bindCard',
	  	data () {
	  		document.title = "绑定银行卡"
	    	return {
			
	    	}
	  	},
		methods:{
			save(){
	  			var storage = window.localStorage;    
				var token = storage["token"];    
				var agentid = storage["agentid"]; 
				var cardowner = this.$refs.cardowner.value
				var bankname = this.$refs.bankname.value
				var cardno = this.$refs.cardno.value
				var bankarea = this.$refs.bankarea.value
				var bankbranch = this.$refs.bankbranch.value
	  			axios.get("http://118.190.132.104:8080/WRHAgent/addbindinfo",{params: {agentid:agentid,token:token,bindtype:2,bindaccount:'',cardowner:cardowner,bankname:bankname,cardno:cardno,bankarea:bankarea,bankbranch:bankbranch}}).then((res) =>{
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