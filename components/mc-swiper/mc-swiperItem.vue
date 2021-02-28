<template>
	<mc-scroll @scrolltolower="scrolltolower">
		<mc-listCard :item="list[index]" v-for="(item,index) in list" :key="index"></mc-listCard>
		<uni-load-more v-if="list.length===0||list.length>4" :status="loadStatus.loading"  iconType="circle" color="#f07373"></uni-load-more>
	</mc-scroll>
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
			loadStatus:{
				type:Object,
				default(){
					return {
						loading:'loading'
					}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			scrolltolower(){
				this.$emit('scrolltolower')
			}
		}
	}
</script>

<style>

</style>
