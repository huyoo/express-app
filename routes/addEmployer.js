/**
 * 创建雇员
 * create by hy ON 2020/7/19
 */
const EmployerDao = require("../daos/EmployerDao");
const {responseClient} = require("../util");

module.exports = (req, res) => {
	const {body: {name, age, address = ''} = {}} = req;

	const id = new Date().getTime();

	EmployerDao.add({id, name, address, age})
			.then(result => {
				responseClient(res, 200, 3, '请求成功', result.dataValues || null)
			})
			.catch(err => {
				responseClient(res, 500, false, err.parent.sqlMessage || '请求失败')
			})
}
