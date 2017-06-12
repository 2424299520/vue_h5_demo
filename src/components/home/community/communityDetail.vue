<template xmlns:v-on="http://www.w3.org/1999/xhtml">
	<div id='communityDetail'>
      <div class="box">
          <div class="img">
            <img :src='this.$route.query.domainphoto == null ? "../../../static/store_logo.png" : this.$route.query.domainphoto' alt="">
          </div>
          <div class="text">
              <p class="store_name">{{this.community.name}}</p>
              <p class="store_num"><span class="person">{{this.community.usernum}}</span><span class="home">{{this.community.shopnum}}</span></p>
              <p class="address"><span>{{this.community.address}}</span></p>
          </div>
      </div>
      <div>
          <select name="" id="" ref="select" @change="thisSelect">
            <option value="0">今天</option>
            <option value="1">一周</option>
            <option value="2">本月</option>
            <option value="3">三个月</option>
            <option value="4">六个月</option>
          </select>
      </div>
      <div class="title">
          <span>日期</span>
          <span>交易额</span>
      </div>
      <div class="money e1" v-for="item in list" :class="{ 'e2' : e2}">
        <p>
         <span>{{item.data}}</span>
         <span>{{item.text}}元</span>
        </p>
      </div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import axios from 'axios'
	import thisData from '@/components/setWechatTitle'
	export default {
  		name: 'communityDetail',
  		data () {
  			document.title = "店铺交易额"
    		return {
				community : '',
				imgList : '',
        typeNumber : 0,
          e3 : false,
        e1 : "e1",
        e2 : 'e2',
        list :[
          {
              data:"2017-6-19",
              text : 6478332
          },
          {
            data:"2017-6-9",
            text : 6478332
          },
          {
            data:"2017-6-29",
            text : 6478332
          },
        ]
    		}
  		},
    created(){
  		this._init()
    },
    methods: {
      _init(typeNumber){
          for(var i = 0 ; i <= this.list.length ; i++){
            if(i % 2 == 1){
              console.log(this.e2)
              this.e2 = true;
            }
        }
        var self = this;
        var storage = window.localStorage;
        var token = storage["token"];
        var agentid = storage["agentid"];
        var areaid = self.$route.query.domainid;
        if(typeNumber == undefined){
          typeNumber = self.typeNumber;
        }else{
            typeNumber
        }
        axios.get('http://118.190.132.104:8080/WRHAgent/commnuitytrade', {params: {token: token,agentid: agentid,areaid: areaid,type:typeNumber,channel:0,pageno: 1, pagesize: 15} }).then(function (res) {
          if (res.data.code == 1) {
            self.community = res.data.data;
            console.log(self.community.list)
          } else {
            console.log(res.data.msg);
            console.log(res.data)
          }
        })
      },
      thisSelect(ele){
          var typeNumber = ele.target.value
          this._init(typeNumber)
      }
    }

	}
</script>

<style>
</style>
