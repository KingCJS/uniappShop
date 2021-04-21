<template>
	<view>
		商品详情
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				humimages: null, //商品详情轮播图
				info: null, //商品详情中的价格、库存等信息
				desc: null, //商品详情的图文描述内容
			}
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
				const {data: humimages} = await this.$myRequest({
					url: '/goods/getdesc/' + this.id
				});
				this.humimages = humimages.message;
				console.log(this.humimages);
			},
			
			//获取商品详情中的价格、库存等信息
			async getinfo() {
				const {data: info} = await this.$myRequest({
					url: '/goods/getinfo/' + this.id
				});
				this.info = info.message;
				console.log(this.info);
			},
			
			//获取商品详情的图文描述内容
			async getdesc() {
				const {data: desc} = await this.$myRequest({
					url: '/goods/getdesc/' + this.id
				});
				this.desc = desc.message;
				console.log(this.desc);
			},
		}
	}
</script>

<style>
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
				line-height: 50rpx;
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
