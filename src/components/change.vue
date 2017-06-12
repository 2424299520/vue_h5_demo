<template>
  <div id='change'>
	<div class='first'>
		<p v-on:click="btn()">商业街</p>
		<img src="../assets/images/articl.png" alt="" />
	</div>
	<div class='second'>
		<p>精准广告</p>
		<img src="../assets/images/adv.png" alt="" />
	</div>
  </div>
  
</template>

<script>
export default {
  name: 'change',
  data () {
  	document.title = "选择频道"
    return {
				
    }
  },

  methods:{
  	btn(){
  		this.$router.push({ path: 'bizHome',query:{token :this.$route.query.token,agentid : this.$route.query.agentid ,agentchannel:this.$route.query.agentchannel,agenttype:this.$route.query.agenttype}}) 
  	}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
