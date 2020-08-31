/**
 * create by hy ON 2020/8/31
 */
const ItemContentDao = require('../daos/ItemContentDao');
const {responseClient} = require("../util");

module.exports = (req, res) => {
	ItemContentDao.findById('d87165f0-eb9b-11ea-90d2-95d479424a9e')
			.then(result => {
				res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'});
				res.end(result.content)
			})
			.catch(err => {
				return responseClient(res, 500, false, '解析失败', {success: false, message: err})
			})
}
