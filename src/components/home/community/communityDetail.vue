<template>
	<div id='communityDetail'>
      <div class="box">

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
				communityList : [],
				imgList : '',

    		}
  		},

	}
</script>

<style>
</style>
