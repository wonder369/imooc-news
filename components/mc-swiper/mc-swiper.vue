<template>
	<swiper style="height: 100%;" :current="swiperIndex" @change="swiper_change">
		<swiper-item v-for="(item,index) in tabItem" :key="index" style="height: 100%;">
			<swiper-item-self :list="listArr[swiperIndex]" @scrolltolower='scrolltolower' :loadStatus="load[swiperIndex]"></swiper-item-self>
		</swiper-item>
	</swiper>
</template>

<script>
	import swiperItemSelf from './mc-swiperItem.vue'
	export default {
		props:{
			tabItem:{
				type:Array,
				default(){
					return []
				}
			},
			swiperIndex:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		data() {
			return {
				listArr:[],
				/* page:1,这个不能写成这样，因为如果写成这样的话，每个tab会共享
				 所以写成，
				 */
				load:{},
				pageSize:5
			};
		},
		methods:{
			swiper_change(e){
				const {current}=e.detail
				this.$emit('change',current)
				if(!this.listArr[current]|| this.listArr.length===0){
					this.getList(current)
				}
			},
			getList(swiperIndex){
				if(!this.load[swiperIndex]){
					
					this.load[swiperIndex]={
						page:1,
						loading:'loading'
					}
				}
				this.$api.get_list({name:this.tabItem[swiperIndex].name,page:this.load[swiperIndex].page,pageSize:this.pageSize}).then(res=>{
					let {data}=res
					console.log(data)
					/* this.list=data 这样会有卡顿，因为每一次调用云函数的时候有延迟
					重新赋值的时候也有延迟
					*/
				   /* this.listArr[current]=data */
				   if(data.length===0){
					   let oldLoad={}
					   oldLoad.loading='noMore'
					   this.$set(this.load,swiperIndex,oldLoad)
					   this.$forceUpdate()
					   return
				   }
				   let oldList=this.listArr[swiperIndex]||[]
				   oldList.push(...data)
				   /* 第一个，要改变的数组，第二个修改的第几项，第三个实际要变的*/
				   /* 相当于数据懒加载*/
				   this.$set(this.listArr,swiperIndex,oldList)
				   
				})
			},
			scrolltolower(){
				if(this.load[this.swiperIndex].loading==='noMore') return
				this.load[this.swiperIndex].page++
				this.getList(this.swiperIndex)
			}
		},
		components:{
			swiperItemSelf
		},
		watch:{
			tabItem(newval){
				if(newval.length===0) return
				this.getList(this.swiperIndex)
			}
		}
		/* created() {
			tabItem可能还没有赋值 
			this.getList(0)
		} */
	}
</script>

<style>

</style>
