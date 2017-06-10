<template>
	<div id='headT'>
		<img @click='gotell()' class='tell' src="../../../assets/images/tell.png" alt="" />
		<img @click='goset()' class='set' src="../../../assets/images/set.png" alt="" />
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
	  name: 'system',
	  data () {
	  	document.title = "系统通知"
	    return {

	    }
	  },

	  methods :{
	  	gotell(){
				var agentid = this.childMsg[0]
				var token = this.childMsg[1]
				this.$router.push({ path: 'tell',query:{agentid : agentid,token : token}}) 
        },
	  	goset(){
				var agentid = this.childMsg[0]
				var token = this.childMsg[1]
				this.$router.push({ path: 'set',query:{agentid : agentid,token : token}}) 
        },
	  },
	  props: ['childMsg'],

	}
</script>

<style>
</style>