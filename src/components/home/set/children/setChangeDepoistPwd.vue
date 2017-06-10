<template>
	<div id='setChangeDepoistPwd'>

		<div class='box'>
			<p><router-link to='set'>绑定</router-link><span>></span></p>
			<p><router-link to='set'>登陆密码</router-link><span>></span></p>
			<p><router-link to='set'>提现密码</router-link><span>></span></p>
		</div>
		<div class='btn'>
			<p><router-link to='/'>退出账号</router-link></p>
		</div>
	</div>
</template>

<script>
	
export default {
  name: 'setChangeDepoistPwd',
  data () {
  	document.title = "设置"
    return {
		
    }
  },

}
</script>

<style>
</style>