/**
 * 表格分页查询
 * create by hy ON 2020/3/5
 */
const {responseClient} = require('../util');
const EmployerDao = require('../daos/EmployerDao');

module.exports = (req, res) => {
	const {body: {page = 1}} = req;
	const pageSize = 10;

	EmployerDao.findByPage(pageSize, page)
			.then(result => responseClient(res, 200, 3, '请求成功', result))
			.catch(e => responseClient(res, 500, false, '处理失败', e));
};
