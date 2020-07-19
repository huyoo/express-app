/**
 * @decs:  route索引
 * @auth: huyoo
 * @date: 2020/7/19
 */
const table = require('./table');
const fileUpload = require('./fileUpload');
const crawler = require('./crawler');
const addEmployer = require('./addEmployer');

module.exports = app => {
	app.post('/table-list', table);
	app.post('/upload', fileUpload);
	app.get('/crawler', crawler);
	app.post('/add-employer', addEmployer);
};
