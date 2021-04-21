<template>
	<view class="news">
		<news-item :news='news' @itemClick="itemClick"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item.vue'
	export default {
		data() {
			return {
				news: [],
			}
		},
		components:{
			newsItem
		},
		onLoad() {
			this.getNews();
		},
		methods: {
			async getNews() {
				const {data: res} = await this.$myRequest({
					url: '/getnewslist'
				});
				this.news = [...res.message];
				console.log(this.news);
			},
			
			//点击哪张图片进入对应的详情页面
			itemClick(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			}
		}
	}
</script>

<style>

</style>
