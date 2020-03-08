/**
 * create by hy ON 2020/3/8
 */
const multiparty = require('multiparty');
const fs = require('fs');
const {responseClient} = require('../util');

module.exports = (req, res) => {
	const form = new multiparty.Form();
	/* 设置编辑 */
	form.encoding = 'utf-8';
	//设置文件存储路劲
	form.uploadDir = './public';
	//设置文件大小限制
	// form.maxFilesSize = 1 * 1024 * 1024;
	form.parse(req, function (err, fields, files) {
		try {
			let inputFile = files.file[0];
			let uploadedPath = inputFile.path;
			let newPath = form.uploadDir + "/" + inputFile.originalFilename;
			//同步重命名文件名 fs.renameSync(oldPath, newPath)
			fs.renameSync(inputFile.path, newPath);
			responseClient(res, 200, 3, '请求成功', {result: '上传成功'})

			//读取数据后 删除文件
			// fs.unlink(newPath, function () {
			//   console.log("删除上传文件");
			// })
		} catch (err) {
			console.log(err);
			responseClient(res, 500, 3, '请求成功', {result: '上传失败'})
		}
	})
};
