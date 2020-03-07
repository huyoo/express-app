/**
 * create by hy ON 2020/3/5
 */
const {responseClient} = require('../util');
const Employer = require('../models/Employer');

module.exports = (req, res) => {
	const {body} = req;

	Employer.findAll()
			.then(result => {
				responseClient(res, 200, 3, '请求成功', result)
			})
};
