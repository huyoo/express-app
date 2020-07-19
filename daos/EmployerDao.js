/**
 * create by hy ON 2020/3/28
 */
const {sequelize} = require('../config/db.config');
const Employer = require('../models/Employer');

exports = module.exports = {
	add: async function (employer) {
		return await sequelize.transaction({}, (transaction) => {
			return Employer.create(employer, {transaction})
		})
	},
	findByPage: async function (pageSize = 15, page = 1) {
		const rows = await Employer.findAll({
			limit: pageSize,
			offset: pageSize * (page - 1)
		});

		const queryTotal = await sequelize.query('SELECT COUNT(e.id) as total from employer e');
		const total = queryTotal[0][0].total;

		return {
			rows,
			total: total,
			currentPage: page,
			totalPage: parseInt((total / pageSize).toString()) + (total % pageSize ? 1 : 0),
		}
	},
	deleteById: function () {

	}
};
