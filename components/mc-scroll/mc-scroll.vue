<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="scrolltolower">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			scrolltolower(){
				console.log('上拉了')
				this.$emit('scrolltolower')
			}
		}
	}
</script>

<style lang="scss">
 .scroll{
 	overflow: hidden;
	height: 100%;
 	.list-scroll{
 		height: 100%;
 		display: flex;
 		flex-direction: column;
 	}
 }
</style>
