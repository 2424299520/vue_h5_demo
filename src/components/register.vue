<template>
  <div id="register">
		<form action="">

			<input class='num' id='phone' type="number" placeholder="请输入手机号" ref='phone' name='phone' autoComplete="off"/>

			<input type="button" value="获取验证码" id='btn' v-on:click='btn'>
			<input class='num' type="number" id='verifycode' max="16" min="6" placeholder="请输入验证码" ref='verifycode' name='verifycode' autoComplete="off"/>
			<input class='num' type="password" id='pwd' max="16" min="6" placeholder="请输入新密码" ref='pwd' name='pwd' autoComplete="off"/>
			<input type="button" value="完成" class='btn' v-on:click='Submit'/>

		</form>
			<tip :logo-msg="msges"></tip>
		<router-view></router-view>
  </div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	import tip from '@/components/message/tip'

	$(document).ready(function(){


		  	$("#btn").click(function(){
		  		var mobileJuge = true;
					var mobileInput = $("#phone")
          var mobilePhone = mobileInput.val();
          if(mobilePhone=='' || !(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(mobilePhone))){
            mobileInput.trigger('blur',[mobileJuge]);
            return;
          }else{
						var wait=60;
						function time(o) {
						console.log(o)
							  if (wait == 0) {
							   o.removeAttribute("disabled");
							   o.value="获取验证码";
							   wait = 60;
							   $("#getCode").css({"color":"#F4423 6","border":"1px solid #f44236"})
							  } else {
							   $("#getCode").css({"color":"#333","border":"1px solid #333"})
							   o.setAttribute("disabled", true);
							   o.value= wait;
							   wait--;
							   setTimeout(function() {
							    time(o)
							   },
							   1000)
							}
						}
						time(this)
          }

	})
	})

export default {
  name: 'register',
  data () {
  	document.title = "忘记密码"
    return {
			phone : '',
			pwd : '',
			msges : ''
    }
  },
  components:{
  	tip,

  },
  methods :{
  	btn(){
  		var phone = this.$refs.phone.value
  		axios.get("http://118.190.132.104:8080/WRHAgent/getvericode",{params: {"phone":phone}}).then((res) => {
          if(res.data.code == 1){
          	console.log("success")
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
  	},

	Submit(){

		axios.post("http://118.190.132.104:8080/WRHAgent/resetpwd",$("form").serialize()).then((res) => {
        if(res.data.code == 1){
        		var tip = $(".error-tip");
					    if(!tip.is(":visible")){
					    	this.msges = "重设密码成功"
					        tip.show();
					        setTimeout(function(){
					            tip.html('');
					            tip.hide();
					        },2000);
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
	}
  }
}
</script>


<style scoped>

</style>
