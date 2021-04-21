<template>
	<view class="home">
		<!-- 轮播图区域 -->
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>

		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key='index' @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods='goods' @goGoodsDetail="goGoodsDetail"></goods-list>
		</view>
	</view>
	</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				],
				goods: [],
			}
		},
		onLoad() {
			this.getSwipers();
			this.getHotGoods();
		},
		components: {
			goodsList
		},
		methods: {
			//获取轮播图
			async getSwipers() {
				// uni.request({
				// 	url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
				// 	success: res => {
				// 		console.log(res);
				// 		if(res.data.meta.status !== 200) {
				// 			return uni.showToast({
				// 				title: "获取数据失败"
				// 			})
				// 		}
				// 		this.swipers = res.data.message;
				// 		console.log(this.swipers);
				// 	}
				// })
				const {data: res} = await this.$myRequest({
					url: '/getlunbo'
				})
				
				this.swipers = res.message;
				// console.log(res);
				// console.log(this.swipers);
			},
			//获取商品列表
			async getHotGoods() {
				const {data: res} = await this.$myRequest({
					url: '/getgoods?pageindex=1'
				})
				this.goods = res.message;
				console.log(this.goods);
			},
			// 黑马超市页面跳转
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			
			//导航到商品详情页
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/good-detail/good-detail?id=' + id 
				})
			},
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				flex: 1;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: #b50e03;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}


		}

		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;

			.tit {
				height: 50px;
				line-height: 50px;
				color: #b50e03;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
