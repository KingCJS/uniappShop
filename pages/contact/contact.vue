<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话: 13104730552(点击拨打)</view>
			<view>地址:北京师范大学珠海分校</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 113.539697,
				latitude: 22.354192,
				scale: 13,
				markers: [
					{
						longitude: 113.539697,
						latitude: 22.354192,
						iconPath: '../../static/logo.png',
						width: 30,
						height: 30,
					}
				]
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '13104730552',
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>

