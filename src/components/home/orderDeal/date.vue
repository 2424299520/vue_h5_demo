<template xmlns:v-on="http://www.w3.org/1999/xhtml">
	<div id='date'>
    <div @click="getDays()">123</div>
    <div v-html="arrayList">

    </div>
    <input type="text" v-model="zhi">
    <div class="box swiper-container">
      <div class="year">
        <ul>
          <li v-for="list in arrayList">{{list}}</li>
        </ul>
      </div>
      <div class="month">
        <ul>
          <li v-for="month in monthList">{{month}}</li>
        </ul>
      </div>
    </div>
    <swiper class="box" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="list in arrayList" key="i">{{list}}</swiper-slide>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
	</div>
</template>

<script>
	import $ from 'jquery'
	import axios from 'axios'
  import thisData from '@/components/setWechatTitle'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
  		name: 'date',
    data(){
  		    return{
            yearList : "",
            arrayList :[],
            monthList : [],
            zhi :10,
            list : 2017,
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              notNextTick: true,
              // swiper configs 所有的配置同swiper官方api配置
              autoplay: 3000,
              direction : 'vertical',
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              pagination : '.swiper-pagination',
              scrollbar: '.swiper-scrollbar',
              scrollbarHide: true,
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 30,
              grabCursor: true,
//              loop: true
            }
          }
    },
    created(){
  		    this.getDays()
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      getDays(item){
        let fullYear = new Date().getFullYear();
        var arrayList
        for(var i = 1970; i<= fullYear ; i++){
//          var item = i;
          this.arrayList.push(i)
//          this.arrayList.push(thisData.toArray(item))
        }
        for(var a = 1 ; a <= 12 ;a++){
          this.monthList.push(a)
        }

      },

    },
    computed:{

    },
    mounted(){

    }

	}
</script>

<style>
</style>
