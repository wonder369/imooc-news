<template>
	<view>
		<view class="list-card" v-if="mode===''">
			<view class="list-image">
				<image src="../../static/logo.png" mode="aspectFit"></image>
			</view>
			<view class="list-content">
				<view class="content-title">
					<text>对方未付未付未付欺负我全服务器服务器服务器服务器吴青峰吴青峰吴青峰吴青峰吴青峰气味</text>
				</view>
				<view class="content-info">
					<view class="info-type">前端</view>
					<view class="info-wacth_times">120浏览</view>
				</view>
			</view>
	   </view>
	   <view class="list-card more-mode" v-if="mode==='more'">
			<view class="list-content">
				<view class="content-title">
					<text>对方未付未付未付欺负我全服务器服务器服务器服务器吴青峰吴青峰吴青峰吴青峰吴青峰气味</text>
				</view>
				<view class="content-image">
					<view class="image-box" v-for="item in 3">
						<image src="../../static/logo.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="content-info">
					<view class="info-type">前端</view>
					<view class="info-wacth_times">120浏览</view>
				</view>
			</view>
		</view>
		<view class="list-card big-mode" v-if="mode==='big'">
			<view class="list-image">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="list-content">
				<view class="content-title">
					<text>对方未付未付未付欺负我全服务器服务器服务器服务器吴青峰吴青峰吴青峰吴青峰吴青峰气味</text>
				</view>
				<view class="content-info">
					<view class="info-type">前端</view>
					<view class="info-wacth_times">120浏览</view>
				</view>
		   </view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			mode:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .list-card{
	  display: flex;
	  padding: 10px;
	  margin: 10px;
	  border-radius: 8px;
	  box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.2);
	  .list-image{
		  width: 60px;
		  height: 60px;
		  border-radius: 10px;
		  overflow: hidden;
		  padding-right: 10px;
		  image{
			  width: 100%;
			  height: 100%;
		  }
	  }
	  .list-content{
		  display: flex;
		  flex-direction: column;
		  justify-content: space-between;
		  flex: 1;
		  .content-title{
			  font-size: 14px;
			  color: #333;
			  font-weight: 400;
			  line-height: 1.2;
			  text{
				  overflow: hidden;
				  text-overflow: ellipsis;
				  display: -webkit-box;
				  -webkit-line-clamp:2;
				  -webkit-box-orient:vertical;
			  }
		  }
		  .content-info{
			  display: flex;
			  justify-content: space-between;
			  align-items: center;
			  .info-type{
				  color: $mainColor;
				  border:1px $mainColor solid;
				  padding: 0 5px;
				  margin-right: 5px;
				  border-radius: 15px;
				  font-size: 12px;
			  }
			  .info-wacth_times{
				  color: $unmainColor;
				  font-size: 10px;
			  }
		  }
	  }
      &.more-mode{
		  .list-content{
			  .content-image{
				  display: flex;
				  margin: 10px 0;
				 .image-box{
					 flex: 1;
					 height: 80px;
					 image{
						 width: 100%;
						 height: 100%;
					 }
				 }
			  }
		  }
	  }
	  &.big-mode{
		  display: flex;
		  flex-direction: column;
		  .list-image{
			  width: 100%;
			  height: 80px;
		  }
	  }
  }
  
</style>
