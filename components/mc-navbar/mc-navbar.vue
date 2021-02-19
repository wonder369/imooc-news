<template>
	<view>
		<view class="navbar">
			<!-- 状态栏高度 -->
			<view :style="{height:statusBarHeight+'px',width:'100%'}"></view>
			<view class="search-content" :style="{height:searchHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="search-icon">
						<!-- <uni-icons type="search" color="#f07373" size="20"></uni-icons> -->
						<mc-icons type="search" color="#f07373" size="20"></mc-icons>
					</view>
					<view class="search-text">
						<text>uni-app,vue...</text>
					</view>
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+searchHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				searchHeight:45,
				windowWidth:375
			}
		},
		methods: {
			
		},
		created() {
			const info=uni.getSystemInfoSync()
			this.statusBarHeight=info.statusBarHeight
			this.windowWidth=info.windowWidth
			/* 获取胶囊位置  因为不是每个里面都有胶囊，所以条件编译*/
			// #ifndef H5 || APP-PLUS ||MP-ALIPAY
			const menuButtonInfo=uni.getMenuButtonBoundingClientRect()
			/* 胶囊底部高度-状态栏高度 + 胶囊顶部高度-状态栏高度 */
			const searchHeight=(menuButtonInfo.bottom-info.statusBarHeight)+
			(menuButtonInfo.top-info.statusBarHeight)
			this.searchHeight=searchHeight
			this.windowWidth=menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
   .navbar{
	position: fixed;
	z-index: 99;
   	width: 100%;
	left: 0;
	top: 0;
   	background-color: #f07373;
	display: flex;
	flex-direction: column;
	.search-content{
		display: flex;
		align-items: center;
		height: 45px;
		justify-content: center;
		padding: 0 5px;
		  .navbar-search{
		  	display: flex;
		  	align-items: center;
		  	height: 35px;
		  	background-color: #fff;
			padding: 0 5px;
		  	width: 100%;
		  	border-radius: (35px/2);
		  	.search-icon{
		  		margin: 0 5px;
		  	}
		  	.search-text{
		  		font-style: 12px;
		  		color: #999;
		  	}
		}
	 }
   }
</style>
