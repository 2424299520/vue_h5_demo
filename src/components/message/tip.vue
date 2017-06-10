<template>
  <div>
		<div class="error-tip" style="display: none;">{{logoMsg}}</div>
  </div>
</template>

<script>
export default {
  name: 'tip',
  data () {
    return {
			Tip:'',
    }
  },
  props: ['logoMsg']
}
</script>

<style>
.error-tip{ position: absolute; left: 50%; top :60%; -webkit-transform: translate(-50%,0%); color: #fff; margin: 0 auto; background-color: #5c5d5d; padding: 0.2rem 0.5rem; border-radius: 0.5rem; max-width: 9rem;}
</style>
