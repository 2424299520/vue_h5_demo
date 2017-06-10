<template>
	<div id='setBindPay'>
		<div class='setBindPay'>
			<p v-for='pay in payList' key='i'>
				<span class='img'><img :src='pay.payImg'/></span>
				<span class='title'>{{pay.payType}}</span>
				<span :id='pay.bindId' class='bind' @click='btn($event)'>{{pay.bindAccout}}</span>
				<span class='iphone'>{{pay.payNum}}</span>
			</p>	
		</div>
		<div v-show='tipBox' class='tipBox'>
			<p class='tipMsg'>确定要解除绑定？</p>
			<p class='tipChange'><span @click='cancel()'>取消</span><span @click='sure($event)'>确定</span></p>
		</div>
		<div v-show='cover' class='cover'></div>
		<tip :logo-msg="msges"></tip>
		
	</div>
</template>

<script>
	import $ from 'jquery'
	import axios from 'axios'	
	import tip from '@/components/message/tip'
export default {
  name: 'setBindPay',
  data () {
  	document.title = "设置"
    return {
   		baseUrl : "http://127.0.0.1:8065",
		payList : '',
		payImg : '',
		payType :'',
		payNum : '',
		tipBox : false,
		cover : false,
		userId : '',
		msges : '',
    }
  },
  components:{
  	tip,
  },
    created(){
    	this._init()

    },
    methods:{

		_init(){
	  		var storage = window.localStorage;    
			var token = storage["token"];    
			var agentid = storage["agentid"]; 

			axios.get("http://118.190.132.104:8080/WRHAgent/getbindlist",{params: {agentid:agentid,token:token}}).then((res) =>{
    			if(res.data.code == 1){
    				this.payList = res.data.data
		    		for(var i = 0 ; i < this.payList.length ; i++){
		    			if(this.payList[i].bindType == 0 ){
		    				this.payList[i].payImg = "../../../../../static/weChat.png"
		    				this.payList[i].payType = '微信'
		    				this.payList[i].payNum = this.payList[i].bindAccount
			   			}else if(this.payList[i].bindType == 1 ){
			   				this.payList[i].payImg = "../../../../../static/pay.png"	
		    				this.payList[i].payType = '支付宝'
		    				this.payList[i].payNum = this.payList[i].bindAccount
			   			}else if(this.payList[i].bindType == 2 ){
							this.payList[i].payImg = "../../../../../static/card.png"	
		    				this.payList[i].payType = '银行卡'
		    				this.payList[i].payNum = this.payList[i].cardNo
			   			}
			   			if(this.payList[i].agentId != null){
			   				this.payList[i].bindAccout = '解绑'
			   			}else{
			   				this.payList[i].bindAccout = '绑定'
			   			}
		   			}   				
    			}else{
    				console.log(res.data.msg)
    			}
    		})

		},
		btn(){
				if(event.path[0].innerHTML != '绑定'){
					this.tipBox = true
					this.cover = true
					this.userId = event.path[0].id
				}else{
					var str = event.path[1].innerText
					str = str.substring(1,2) 
					if(str == "微"){
						this.$router.push('bindWechat')
					}else if(str == "支"){
						this.$router.push('bindPay')
//						"13333218267"
					}else if(str == "银"){
						this.$router.push('bindCard')
					}
				}				
		},
		cancel(){
			this.tipBox = false
			this.cover = false
		},
		sure(){
    		var storage = window.localStorage;    
			var token = storage["token"];    
			var agentid = storage["agentid"]; 
			var bindid = this.userId
			axios.get("http://118.190.132.104:8080/WRHAgent/delbindinfo",{params: {agentid:agentid,token:token,bindid:bindid}}).then((res) =>{
    			if(res.data.code == 1){		
    				this.$router.replace('blank')
    			}else{
    					this.cancel()
    					var tip = $(".error-tip");
					    if(!tip.is(":visible")){
					    	this.msges = res.data.msg
					        tip.show();
					        setTimeout(function(){
					            tip.html('');
					            tip.hide();
					    		window.location.reload();
					        },2000);
					    }

					    
    			}
    		})
		}
   },
   computed : {
		
   }
}
</script>

<style>
</style>