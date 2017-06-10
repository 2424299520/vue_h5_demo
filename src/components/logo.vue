<template>
  <div id="logo">
		<form action="">
			<input class='num' type="number" max="11" min="0" placeholder="请输入手机号" ref='phone' name='phone' autoComplete="off"/>
			<input class='num' type="password" max="16" min="6" placeholder="请输入密码" ref='pwd' name='pwd' autoComplete="off"/>
			<p><router-link to='register'>忘记密码<br /></router-link></p>
			<input type="button" value="登录" class='btn' v-on:click='Submit'/>
		</form>
		<tip :logo-msg="msges"></tip>
		<router-view></router-view>
  </div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	import tip from '@/components/message/tip'
	import thisData from '@/components/setWechatTitle'  	
	
export default {
  name: 'logo',
  data () {
  	document.title = "登录"
    return {
			phone : '',
			pwd : '',
			msges : '',
    }
  },
  components:{
  	tip,
  },
  created (){
  	this._init()
  },
  methods :{
  	_init(){
  		  var storage = window.localStorage;    
		    var stopdate = storage["stopdate"];    
		    var token = storage["token"];    				
  	},
  	Submit(){
  		var phone = this.$refs.phone.value
  		var pwd = this.$refs.pwd.value
		axios.post("http://118.190.132.104:8080/WRHAgent/agentlogin",$("form").serialize()).then((res) => {
          if(res.data.code == 1){
          	this.comData = res.data.data
          	console.log(this.comData)
          	var objStr = this.comData
          	thisData.saveStorage(objStr)
          	this.$router.push({ path: 'change'}) 
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
