
var baseUrl = '/ehop/product';
function ajax(data, callback, errorCallback) {
	var token = sessionStorage.token;
	if (token) {
		data.headers = {
			Authorization: token
		}
	}
	data.url = baseUrl + data.url;
	data.success = (res) => {
		if (callback) {
			callback(res)
			if (res.ret != 0) {
				console.log(1231231)
				try {
					$p.notify({
						content: res.msg.indexOf('验证失败') != -1 ? '未找到与当前输入相关联的账号，请核对后再试' : res.msg,
						type: 'danger'
					})
				} catch (e) {
					//TODO handle the exception
				}
			}
		}
	}
	data.error = (res) => {
		if (res.status == 401) {
			try {
				$p.toast({
					content: '当前浏览内容需要登录才能继续访问',
					onConfirm: function () {
						$p.hideToast();
						location.href = 'login.html'
					}
				})
			} catch (e) {
				//TODO handle the exception
			}
		} else if (res.status == 500) {
			try {
				$p.notify({
					content: '服务器异常',
					type: 'danger'
				})
			} catch (e) {
				//TODO handle the exception
			}
		}
		if (errorCallback) {
			errorCallback(res)
		}
	}
	$.ajax(data);
}