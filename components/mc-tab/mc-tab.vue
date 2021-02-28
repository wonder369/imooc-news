<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-scroll">
			<view class="scroll-box">
				<view class="scroll-item" v-for="(item,index) in list" :key="index"
				@click="clickTab(item,index)"
				:class="{active:tabIndex===index}"
				>{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icon">
			<mc-icons type="gear" color="#666" size="26"></mc-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			tab_index:{
				type:Number,
				default:0
			}
		},
		watch:{//监听props和data值的变化
			tab_index(newval){
				this.tabIndex=newval
				console.log(newval)
			}
		},
		data() {
			return {
				tabIndex:0
			}
		},
		methods:{
			clickTab(item,index){
				this.tabIndex=index
				console.log(item)
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style lang="scss">
  .tab{
	  display: flex;
	  width: 100%;
	  border-bottom: 1px #f5f5f5 solid;
	  .tab-scroll{
		  flex: 1;
		  overflow: hidden;
		  .scroll-box{
		  	  display: flex;
		  	  align-items: center;
			  /* justify-content: center; 不能加这个，加了的话scroll-view里面的文字显示不全*/
		  	  height: 45px;
		  	  white-space: nowrap;
		  	  .scroll-item{
		  		  padding: 0 10px;
		  		  color: #333;
		  		  font-size: 16px;
		  		  flex-shrink: 0;
				  &.active{
					  color:#f07373 ;
				  }
		  	  }
		  }
	  }
	 .tab-icon{
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  width: 45px;
		  position: relative;
		  &:after{
			  content: "";
			  width: 2px;
			  height: 100%;
			  background-color:#f5f5f5 ;
			  position: absolute;
			  left: 0;
		  }
	  }
  }
</style>
