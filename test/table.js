/**
 * create by hy ON 2020/3/5
 */
const {Random} = require('mockjs');
const Employer = require('../models/Employer');

function addTableData() {

	for (let i = 0; i < 5; i++) {
		const employer = {
			id: new Date().getTime() + i.toString(),
			name: Random.cname(),
			age: Random.integer(1, 100),
			address: Random.county()
		};

		Employer.create(employer)
				.then(res => {
					console.log(new Date() + '：' + res)
				})
	}
}

addTableData();
