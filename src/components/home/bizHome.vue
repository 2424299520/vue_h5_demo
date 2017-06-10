<template>
  <div id='bizHome'>
			<headeres :child-msg="msg"></headeres>
			<div class='mainBack'>
				<div class='main'>
					<div class='img'>
						<img src="../../assets/images/logo.png" alt="" />
					</div>
					<div class="store">店铺：<span>{{users.shopnum}}</span></div>
					<div class='users'>用户：<span>{{users.usernum}}</span></div>
					<p>账号：<span>{{iphone}}</span></p>
					<p>代理区域：<span>{{users.agentarea}}</span></p>
					<p>代理频道：<span>{{agenttype}}</span></p>
					<p>代理期限：<span>{{users.stopdate}} 到期</span></p>					
				</div>
			</div>
			<div class='box'> 
					<div class='boxFirst' @click='goCommunityList' >
							<div>
								<span class='leftT'>社区<span>({{users.communitynum}})</span></span>
							</div>
					</div>
					
					<div class='boxSecond'>
						<div>
							<p>总交易金额</p>
							<p>{{users.totaltrade}}元</p>
						</div>
						<div>
							<p>可提现金额</p>
							<p>{{users.canwithdraw}}元</p>
						</div>
					</div>
					<div class='boxThree'>
						<div class='money b5'>
								<div class='today'>今日</div>
								<div class='give'>
									<p>总交易额</p>
									<p>{{users.todaytrade}}元</p>
								</div>
								<div class='line'></div>
								<div class='get'>
									<p>收益</p>
									<p>{{users.todayincome}}元</p>
								</div>
						</div>
						<div class='money caa'>
								<div class='today'>本周</div>
								<div class='give'>
									<p>总交易额</p>
									<p>{{users.weektrade}}元</p>
								</div>
								<div class='line'></div>
								<div class='get'>
									<p>收益</p>
									<p>{{users.weekincome}}元</p>
								</div>
						</div>
						<div class='money e1'>
								<div class='today'>本月</div>
								<div class='give'>
									<p>总交易额</p>
									<p>{{users.monthtrade}}元</p>
								</div>
								<div class='line'></div>
								<div class='get'>
									<p>收益</p>
									<p>{{users.monthincome}}元</p>
								</div>
						</div>			

					</div>
						<router-link class='pay' to='/'>提现</router-link>
					<loading v-if='ifShow'></loading>
			</div>
  </div>
</template>

<script>
	import headeres from '@/components/home/header/header'
	import loading from '@/components/loading'
	import $ from 'jquery'
	import axios from 'axios'
	
export default {
  name: 'bizHome',
  data () {
  	document.title = "商业街首页"
    return {
    	users : '',
    	ifShow : false,
    	msg: '',
    }
  },
  components : {
  	headeres,
  	loading
  },
  created (){
		this._init()
  },
  methods:{
  	_init(){
  		
  		  	var storage = window.localStorage;    
			    var token = storage["token"];    
			    var agentid = storage["agentid"];  
			    var agentchannel = storage["agentchannel"];  
			    var agenttype = storage["agenttype"];  

					this.ifShow = true
					axios.get("http://118.190.132.104:8080/WRHAgent/agentcenter",{params: {token:token,agentid:agentid,channel:agentchannel,agentlevel:agenttype}}).then((res) => {
						this.ifShow = false
          	if(res.data.code == 1){
          		this.users = res.data.data
          		this.msg = [this.users.agentid,token]
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
  	goCommunityList(){
  			this.$router.push('communityList')
  	}

	},
  computed :{
  	agenttype : function(){
				if(this.users.channel == 0){
					return "全部"
				}else if(this.users.channel == 1){					
					return "商业街"
				}else if(this.users.channel == 2){
					return "精准广告"
				}
  	},
  	iphone (){
  		if(this.users.account){
	  		var str = this.users.account
	  		var str2 = str.substr(0,3)+"****"+str.substr(7);  
	  		return str2
  		}

  	}
  }
}
</script>

<style scoped>

</style>
