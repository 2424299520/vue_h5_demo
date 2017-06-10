<template>
	<div id="tell">
		<header>
			<div class='box'>
				<span class='btn1' @click="tabToggle(sys)" :class='[actives ? "active" : ""]'>系统通知</span>
				<span class='btn2' @click="tabToggle(dep)" :class='[actives ? "" : "active"]'>提现通知</span>
			</div>
			
		</header>
		<div :is='currentView'></div>
	</div>
</template>

<script>
import deposit from '@/components/home/tell/children/deposit'
import system from '@/components/home/tell/children/system'
import axios from 'axios'
export default {
  name: 'tell',
  data () {
  	document.title = "消息通知"
    return {
		actives : true ,
		dep : 'deposit',
		sys : 'system',
		currentView : 'system',
		tellList : ''
    }
  },
    components:{
  	deposit,
	system
  },

	methods : {
		tabToggle:function(tabText){
			this.actives =! this.actives
            this.currentView=tabText
       },

	}
}	
</script>

<style>
	.active { background: #fff; color : #333;}

</style>