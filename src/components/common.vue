
<template>
  <div>
		<div>{{commonData}}</div>
		<change :this-data:"dataObject"></change>
  </div>
</template>

<script>
	import change from '@/components/change'
export default {
  name: 'common',
  data () {
    return {
		dataObject : ''
    }
  },
  components:{
	change
  },
  created (){
  	this._init()
  },
  methods : {
  	_init (){ 		
  		console.log(this.commonData )
  		if(this.commonData != ""){
  			console.log("1")
  			this.dataObject = this.commonData
  		}else{
  			console.log("2s")
  			this.dataObject = this.commonData
  			console.log(this.dataObject)
  		}
  	}
  },
  props: ['commonData']
}
</script>

<style>

</style>
