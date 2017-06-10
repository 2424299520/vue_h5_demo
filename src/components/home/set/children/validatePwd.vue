<template>
	<div id='validatePwd'>
		<input type="" name="" id="" ref='userpwd' placeholder="请输入登陆密码以验证身份"/>
		<button @click='save()'>下一步</button>
		<tip :logo-msg="msges"></tip>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	import tip from '@/components/message/tip'
	export default {
	  	name: 'validatePwd',
	  	data () {
	  		document.title = "身份验证"
	    	return {
				msges : ''
	    	}
	  	},
		components:{
		  	tip,
		},	
		methods:{
			save(){
				var self = this ;
				var storage = window.localStorage;    
			    var token = storage["token"];    
			    var agentid = storage["agentid"];  
			    var userpwd = this.$refs.userpwd.value
				axios.get("http://118.190.132.104:8080/WRHAgent/ispwdvalidate",{params: {token:token,agentid:agentid,userpwd:userpwd}}).then((res) => {
	            	if(res.data.code == 1){
						self.$router.push('setChangeDepoistPwd')
	          		}else{
						var tip = $(".error-tip");
						if(!tip.is(":visible")){
						    this.msges = res.data.msg
						    tip.show();
						    setTimeout(function(){
						        tip.html('');
						        tip.hide();
						    },2000);
						}
					}
	      		})				
			}
		}
	}
</script>

<style>
</style>