<template>
		<view class="goods_list">
			<view class="goods_item" v-for="(item, index) in goods" :key='item.id'
			@click="goGoodsDetail(item.id)"
			>
				<image :src="item.img_url"></image>
				<view class="price">
					<text>￥{{item.sell_price}} </text>
					<text>￥{{item.market_price}} </text>
				</view>
				<view class="name">{{item.title}} </view>
			</view>
		</view>
</template>

<script>
	export default {
		name: "goods-list",
		data() {
			return {
				
			};
		},
		props:['goods'],
		methods: {
			goGoodsDetail(id) {
				this.$emit('goGoodsDetail', id)
			}
		}
		
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods_item {
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150rpx;
				display: block;
				margin: 0 auto;
			}

			.price {
				color: #b50e03;
				font-size: 36rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
