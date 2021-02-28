<template>
	<view class="home">
		<mc-navbar></mc-navbar>
		<mc-tab :list="scroll_item" :tab_index="tabIndex" @tabClick="tabClick()"></mc-tab>
		<view class="home-swiper">
			<mc-swiper :tabItem="scroll_item" :swiperIndex="swiperIndex" @change="change()"></mc-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scroll_item:[],
				tabIndex:0,
				swiperIndex:0
			}
		},
		methods: {
			get_label(){
				this.$api.get_label().then(res=>{
					const {data}=res
					data.unshift({name:'全部'})
					this.scroll_item=data
				})
			},
			change(current){
				this.tabIndex=current
				this.swiperIndex=current
			},
			tabClick(index){
				this.swiperIndex=index
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
		.home-swiper{
			flex: 1;
			overflow: hidden;
			
		}
	}
</style>
