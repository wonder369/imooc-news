<template>
	<view class="content">
		<mc-navbar></mc-navbar>
		<mc-tab :list="scroll_item"></mc-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scroll_item:[]
			}
		},
		methods: {
			get_label(){
				this.$api.get_label().then(res=>{
					this.scroll_item=res.data
				})
			}
		},
		onLoad() {
			this.get_label()
		}
	}
</script>

<style lang="scss">
	
</style>
