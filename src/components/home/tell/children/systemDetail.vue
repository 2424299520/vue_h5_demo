<template>
	<div id='systemDetail'>
		<div class='box'>
			<p class='tell'>系统通知</p>
			<p class='text'>{{this.$route.params.noticeCon}}</p>
			<p class='company'>万人慧</p>
			<p class='time'>{{this.$route.params.noticeTime}}</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	name : 'systemDetail'
	export default {
	  name: 'system',
	  data () {
	  	document.title = "系统通知"
	    return {
			tellList : ''
	    }
	  },

	  methods :{

	  }
	
	}	
</script>

<style>
</style>