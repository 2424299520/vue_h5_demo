<template>
	<div id='communityList'>
		<div class='search'>
			<input type="text" placeholder="搜索" />
		</div>
		
		<div class='box' v-for='community in communityList'>
			<div class='img'>
				<img :src="community.imgList" alt="" />
			</div>
			<div class='text'>
				<p class='title'>{{community.domainname}}</p>
				<p class='address'>
					<img src="../../../assets/images/address.png" alt="" />
					{{community.domainaddress}}
				</p>
			</div>
			<div class='goBack'>
				<img src="../../../assets/images/right.png"/>
			</div>
		</div>
	
	</div>
</template>

<script>
	import $ from 'jquery'
	import axios from 'axios'
	export default {
  		name: 'communityList',
  		data () {
  			document.title = "店铺列表"
    		return {
				communityList : '',
				imgList : '',
    		}
  		},
  		created(){
  			this._init()
  		},
  		methods:{
			_init(){
				var storage = window.localStorage;    
			    var token = storage["token"];    
			    var agentid = storage["agentid"];  
				var agentarea = storage["agentarea"];

				axios.get("http://118.190.132.104:8080/WRHAgent/getdomains",{params: {token:token,agentid:agentid,areaid:agentarea,con:'',pageno:1,pagesize:15}}).then((res) => {
					if(res.data.code == 1){
						this.communityList = res.data.data
						console.log(this.communityList)
						for(var i = 0; i < this.communityList.length ; i++ ){
							if(this.communityList[i].domainphoto != null){
								this.communityList[i].imgList = this.communityList[i].domainphoto
							}else{
								this.communityList[i].imgList = "../../../static/store_logo.png"
							}
						}
					}
	      		})  				
			}
  		}
	}
</script>

<style>
</style>