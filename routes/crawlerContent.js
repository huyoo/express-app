/**
 * create by hy ON 2020/8/31
 */
const superagent = require('superagent');
const cheerio = require('cheerio');
const uuid = require('node-uuid');
const moment = require('moment');

const {responseClient} = require('../util');
const ItemContentDao = require('../daos/ItemContentDao');

module.exports = (req, res) => {
	// res.render('index', { title: 'Express' });

	// 用 superagent 去抓取 https://cnodejs.org/ 的内容
	superagent.get('https://wuhuashe.com/pingdao/zuoping/15310.html')
			.end((err, result) => {
				// 常规的错误处理
				if (err) {
					return responseClient(res, 200, 3, '请求失败', err)
				}

				// result.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
				// 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
				// 剩下就都是 jquery 的内容了
				let $ = cheerio.load(result.text, {decodeEntities:false});
				let content = '';

				try {
					content = $('.content .article-content');
					console.log(content)

					content = content.html();
					content = {
						id: uuid.v1(),
						content
					}
				} catch (e) {
					return responseClient(res, 500, false, '解析失败', {success: false, message: e})
				}

				ItemContentDao.add(content)
						.then(() => {
							return responseClient(res, 200, true, '解析成功', {success: true})
						})
						.catch((err) => {
							return responseClient(res, 500, false, '解析失败', {success: false, message: err})
						})
			});
};
