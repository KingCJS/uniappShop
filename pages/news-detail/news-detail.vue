<template>
	<view class="news_detail">
		<text class="title">{{detailNews.title}} </text>
		<view class="info">
			<text>发表时间: {{detailNews.add_time | formatDate()}} </text>
			<text>浏览: {{detailNews.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detailNews.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailId: null,
				detailNews: {},
			}
		},
		onLoad(arg) {
			this.detailId = arg.id;
			this.getDetail();
		},
		methods: {
		async	getDetail() {
				const {data: res} = await this.$myRequest({
					url: '/getnew/' + this.detailId
				});
				this.detailNews = res.message[0];
				console.log(this.detailNews);
			},
		},
		filters: {
			formatDate (date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				return year+'-'+month+'-'+day
			}
		},
	}
</script>

<style lang="scss">
	.news_detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			text-align: center;
			width: 710rpx;
			display: block;
			margin: 20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
		.content {
			margin-top: 30rpx;
		}
	}
</style>
