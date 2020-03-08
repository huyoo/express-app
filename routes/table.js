/**
 * 表格分页查询
 * create by hy ON 2020/3/5
 */
const {sequelize} = require('../config/db.config');
const {responseClient} = require('../util');
const Employer = require('../models/Employer');

module.exports = async (req, res) => {
	const {body: {page = 1}} = req;
	const pageSize = 10;

	const rows = await Employer.findAll({
		limit: pageSize,
		offset: pageSize * (page - 1)
	});
	const queryTotal = await sequelize.query('SELECT COUNT(e.id) as total from employer e');
	const total = queryTotal[0][0].total;

	const result = {
		rows,
		total: total,
		currentPage: page,
		totalPage: parseInt((total / pageSize).toString()) + (total % pageSize ? 1 : 0),
	};

	responseClient(res, 200, 3, '请求成功', result)
};
