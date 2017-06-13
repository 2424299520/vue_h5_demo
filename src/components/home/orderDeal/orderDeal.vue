<template xmlns:v-on="http://www.w3.org/1999/xhtml">
	<div id='orderDeal'>

    <label for="myDate">选择您的新婚之日</label>
    <date-picker field="myDate"
                 placeholder="选择日期"
                 v-model="date"
                 format="yyyy/mm/dd"
                 :backward="false"
                 :no-today="true"
                 :forward="true"></date-picker>

      <div class="date">
          <p><span>2017年6月</span><span><img src="../../../assets/images/date.png" alt=""></span></p>
      </div>
      <div class="title">
          <span>日期</span>
          <span>交易额</span>
      </div>
      <div class="money e1" v-for="item in list">
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
  import myDatepicker from 'vue-datepicker-simple/datepicker-2.vue';
	export default {
  		name: 'orderDeal',
  		data () {
  			document.title = "店铺交易额"
    		return {
        date:'',
				community : '',
				imgList : '',
        typeNumber : 0,
        list :[ ]
    		}
  		},
    created(){
//  		this._init()
    },
    methods: {
//      _init(typeNumber){
//        var self = this;
//        var storage = window.localStorage;
//        var token = storage["token"];
//        var agentid = storage["agentid"];
//        var areaid = self.$route.query.domainid;
//        if(typeNumber == undefined){
//          typeNumber = self.typeNumber;
//        }else{
//            typeNumber
//        }
//        axios.get('http://118.190.132.104:8080/WRHAgent/commnuitytrade', {params: {token: token,agentid: agentid,areaid: areaid,type:typeNumber,channel:0,pageno: 1, pagesize: 15} }).then(function (res) {
//          if (res.data.code == 1) {
////            self.community = res.data.data;
//          } else {
//            console.log(res.data.msg);
//          }
//        })
//      },
//      thisSelect(ele){
//          var typeNumber = ele.target.value;
//          this._init(typeNumber)
//      }
    },
    components:{
      'date-picker': myDatepicker
    }

	}
</script>

<style>
</style>
