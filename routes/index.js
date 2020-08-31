/**
 * @decs:  route索引
 * @auth: huyoo
 * @date: 2020/7/19
 */
const table = require('./table');
const fileUpload = require('./fileUpload');
const crawler = require('./crawler');
const addEmployer = require('./addEmployer');
const crawlerContent = require('./crawlerContent');
const showItem = require('./showItem');


module.exports = [
{
		path: '/table-list',
		handler: table,
		type: 'post'
	}, {
		path: '/upload',
		handler: fileUpload,
		type: 'post'
	}, {
		path: '/crawler',
		handler: crawler,
		type: 'get'
	}, {
		path: '/crawler-item',
		handler: crawlerContent,
		type: 'get'
	}, {
		path: '/show-item',
		handler: showItem,
		type: 'get'
	}, {
		path: '/add-employer',
		handler: addEmployer,
		type: 'post'
	},
]
