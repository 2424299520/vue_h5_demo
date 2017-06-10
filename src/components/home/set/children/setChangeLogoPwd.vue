<template>
	<div id='setChangeLogoPwd'>
		<div>
			<p>
				<span>旧密码：</span><input type="" name="" id="" ref='oldpwd' placeholder="请输入旧密码"/>
			</p>
			<p>
				<span>新密码：</span><input type="" name="" id="" min="6" ref='newpwd' placeholder="请输入新密码"/>
			</p>
			<p>
				<span>确认密码：</span><input type="" name="" id="" min="6" ref='newpwdAgain' placeholder="请再次输入新密码"/>
			</p>
		</div>
		<button @click='save()'>确定</button>
		<tip :logo-msg="msges"></tip>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	import tip from '@/components/message/tip'
	
	
	export default {
	  	name : 'setChangeLogoPwd',
	  	data () {
	  		document.title = "修改登陆密码"
	    	return {
				msges : ''
	    	}
	  	},
		components:{
		  	tip,
		},	  	
		methods : {
			save(){
	  			var storage = window.localStorage;    
				var token = storage["token"];    
				var agentid = storage["agentid"]; 
				var phoneno = storage["phoneno"];
				var oldpwd = this.$refs.oldpwd.value
				var newpwd = this.$refs.newpwd.value
				var newpwdAgain = this.$refs.newpwdAgain.value	
				var self = this
				console.log(newpwd.length)
				if(newpwd.length >= 6 && newpwdAgain.length >= 6){
					if(newpwd == newpwdAgain){
						axios.get("http://118.190.132.104:8080/WRHAgent/setnewpwd",{params: {agentid:agentid,token:token,phone:phoneno,oldpwd:oldpwd,newpwd:newpwd}}).then((res) =>{
			    			if(res.data.code == 1){
								console.log(this)
								var tip = $(".error-tip");
								if(!tip.is(":visible")){
								    this.msges = "修改密码成功"
								    tip.show();
								    setTimeout(function(){
								        tip.html('');
								        tip.hide();
								        self.$router.push('set')
								    },1000);
								}			     				
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
					}else{
						var tip = $(".error-tip");
						if(!tip.is(":visible")){
						    this.msges = "两次密码不一致，请重新输入"
						    tip.show();
						    setTimeout(function(){
						        tip.html('');
						        tip.hide();
						    },2000);
						}					
					}					
				}else{
						var tip = $(".error-tip");
						if(!tip.is(":visible")){
						    this.msges = "密码最少为6位"
						    tip.show();
						    setTimeout(function(){
						        tip.html('');
						        tip.hide();
						    },2000);
						}
				}

			},
			btn(){
				console.log(this)
			}
		},
		computed : {

		}
	}
</script>

<style>
</style>