const base_url = "http://49.232.203.244:8002/v1";

export const MyRequest = options => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: base_url + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				// if (res.data.meta.status !== 200) {
				// 	return uni.showToast({
				// 		title: "获取数据失败"
				// 	});
				// };
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title: "获取数据失败"
				});
				reject(err);
			}
		})
	})

}
