<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll">
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
		}
	}
</script>

<style lang="scss">
 .scroll{
 	overflow: hidden;
	flex: 1;
 	.list-scroll{
 		height: 100%;
 		display: flex;
 		flex-direction: column;
 	}
 }
</style>
