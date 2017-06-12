<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id='communityList'>
    <div class='search'>
      <input class="text" type="text" id="text" placeholder="搜索" ref="search" />
      <img src="../../../assets/images/search.png" @click="search()" alt="">
      <input v-if="cen" type="button" v-on:click="cen1()" class="cen" value="取消">
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
      <router-link :to="{name : 'communityDetail',query : {domainphoto :community.domainphoto,domainid :community.domainid}}">123</router-link>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from 'axios'
  import thisData from '@/components/setWechatTitle'

  export default {
    name: 'communityList',
    data () {
      document.title = "店铺列表"
      return {
        communityList : [],
        imgList : '',
        cen : false
      }
    },
    created(){
      var self = this
      self._init()
      self.bindScroll()
    },
    props:{
      page: {
        type: Number,
        default: 1
      },
    },
    watch: {
      page (val) {
        this._init()
      }
    },
    methods:{
      _init(pageIndex){
        let  self = this;
        var storage = window.localStorage;
        var token = storage["token"];
        var agentid = storage["agentid"];
        var agentarea = storage["agentarea"];
        pageIndex  = 1;
        var con = '';
        if($("#text").val() != undefined && $("#text").val() != ''){
          con = $("#text").val();
          this.cen = true
        }
          axios.get('http://118.190.132.104:8080/WRHAgent/getdomains',{params: {token:token,agentid:agentid,areaid:agentarea,con:con,pageno:pageIndex,pagesize:15}}).then(function(res){
          if(res.data.code == 1){
            self.communityList = res.data.data;
            console.log(self.communityList);

            for(var i = 0; i < self.communityList.length ; i++ ){
              if(self.communityList[i].domainphoto != null){
                self.communityList[i].imgList = self.communityList[i].domainphoto;
              }else{
                self.communityList[i].imgList = "../../../static/store_logo.png"
              }
            }
          }else{
            console.log(res.data.msg)
          }
        })
      },
      search(){
          var conVul = this.$refs.search.value;
          this._init()
      },
      cen1(){
        this.$refs.search.value = '';
        this._init();
        this.cen = false;
      },
      bindScroll(){
        var self = this;
        var pageno = self.page.pageno;
        thisData.bindScroll(pageno)
      },
      _loading(pageIndex){
        var self = this ;
        self._init(pageIndex)
      }
    },
    computed : {

    },

  }
</script>

<style>
</style>
