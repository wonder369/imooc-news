<template>
	<view class="home">
		<mc-navbar></mc-navbar>
		<mc-tab :list="scroll_item"></mc-tab>
		<mc-scroll>
			<mc-listCard v-for="item in 5" mode="more"></mc-listCard>
		</mc-scroll>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scroll_item:[],
				modeType:''
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
	page{
		height: 100%;/* page设置为100%，那么就与手机高度减去导航栏一样高 */
	}
	.home{
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
</style>
