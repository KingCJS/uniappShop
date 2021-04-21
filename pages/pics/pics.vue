<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="(item, index) in cates" 
			:key="item.id" 
			:class="currentIndex === index? 'active' : ''" 
			@click="isClick(index, item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="(item, index) in rightcates" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<view>{{item.title}}</view>
			</view>
			<text v-if="rightcates.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				currentIndex: 0,
				rightcates: [],
			}
		},
		onLoad() {
			this.getCates();
		},
		methods: {
			async getCates() {
				const {
					data: res
				} = await this.$myRequest({
					url: '/getimgcategory'
				});
				// console.log(res);
				this.cates = res.message;
				console.log(this.cates);
				this.isClick(0,this.cates[0].id)
			},
		
			async isClick(index, id) {
				this.currentIndex = index;
				const {data: res} = await this.$myRequest({
					url: '/getimages/' + id
				});
				this.rightcates = res.message;
				console.log(this.rightcates);
				console.log(this.rightcates.length);
			},
			previewImg (current) {
					const urls = this.rightcates.map(item=>{
						return item.img_url
					})
					uni.previewImage({
						current,
						urls
					})
				}
			},
		}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
				text-align: center;
			}

			.active {
				background: #b50e03;
				color: #fff;
			}
		}

		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;

			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
