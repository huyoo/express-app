/**
 * create by hy ON 2020/3/5
 */

module.exports = {
	responseClient(res, httpCode = 500, success = false, message = '服务端异常', data = {}) {
		let responseData = {
			success,
			message,
			data
		};

		res.status(httpCode).json(responseData);
	}
};
