<template>
	<view class="goods_detail">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="(item, index) in humimages" :key="index">
				<image :src="item.sec"></image>
			</swiper-item>
		</swiper>
		<!-- 价格以及介绍 -->
		<view class="box1">
			<view class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<view class="goods_name">{{info.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号:{{info.goods_no}}</view>
			<view>库存:{{info.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="desc.content"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id: null,
				humimages: [], //商品详情轮播图
				info: {}, //商品详情中的价格、库存等信息
				desc: {}, //商品详情的图文描述内容
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					// info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 1
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		components: {
			uniGoodsNav,
		},
		onLoad(arg) {
			this.id = arg.id;
			console.log(this.id);
			this.gethumimages();
			this.getinfo();
			this.getdesc();
		},
		methods: {
			//获取商品详情轮播图数据
			async gethumimages() {
				const {
					data: humimages
				} = await this.$myRequest({
					url: '/getthumimages/' + this.id
				});
				this.humimages = humimages.message;
				console.log(this.humimages);
			},

			//获取商品详情中的价格、库存等信息
			async getinfo() {
				const {
					data: info
				} = await this.$myRequest({
					url: '/goods/getinfo/' + this.id
				});
				this.info = info.message[0];
				console.log(this.info);
			},

			//获取商品详情的图文描述内容
			async getdesc() {
				const {
					data: desc
				} = await this.$myRequest({
					url: '/goods/getdesc/' + this.id
				});
				this.desc = desc.message[0];
				console.log(this.desc);
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
				uni.showToast({
					title: `${e.content.text}`,
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: #b50e03;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			padding-bottom: 50px;

			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
			}
		}
	}

	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
</style>

</style>
