<template>
	<div id='set'>
		<div class='img'>
			<img src="../../../assets/images/logo_box.png" alt="" />
		</div>
		<div class='box'>
			<p><router-link to='setBindPay'>绑定</router-link><span>></span></p>
			<p><router-link to='setChangeLogoPwd'>登陆密码</router-link><span>></span></p>
			<p><router-link to='validatePwd'>提现密码</router-link><span>></span></p>
			<p><router-link to='change'>切换频道</router-link><span>></span></p>
		</div>
		<div class='btn'>
			<p><router-link to='/'>退出账号</router-link></p>
		</div>
	</div>
</template>

<script>
	
export default {
  name: 'set',
  data () {
  	document.title = "设置"
    return {
		
    }
  },
}
</script>

<style>
</style>