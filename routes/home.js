/**
 * create by hy ON 2020/8/16
 */
const routes = require('./index')

module.exports = (req, res) => {
	res.send('<!DOCTYPE html><html><head><title>home</title></head><body>' + routes.map(r => '<a type="_blank" href="' + r.path + '">' + r.path + '</a><br/>').join('') + '</body></html>');
};
