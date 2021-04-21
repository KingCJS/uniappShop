<template>
	<view class="goods_list">
		<goods-list :goods="goods" @goGoodsDetail="goGoodsDetail"></goods-list>
		<view class="isOver" v-if="flag">--------------到底了-----------------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false,
			}
		},
		components: {
			goodsList,
		},
		onLoad() {
			this.getGoodsList();
		},
		onReachBottom() {
			if(this.goods.length < this.pageindex * 10) return this.flag = true;
			this.pageindex++;
			this.getGoodsList();
		},
		onPullDownRefresh() {
			this.pageindex= 1;
			this.goods= [];
			this.flag= false;
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh();
				});
			},1000)
		},
		methods: {
			async getGoodsList(callBack) {
				const {
					data: res
				} = await this.$myRequest({
					url: `/getgoods?pageindex=${this.pageindex}`
				});
				this.goods = [...this.goods, ...res.message];
				console.log(this.goods);
				callBack && callBack();
			},
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/good-detail/good-detail?id=' + id 
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}

	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background: #fff;
		font-size: 28rpx;
	}
</style>
