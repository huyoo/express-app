/**
 * 爬取页面
 * create by hy ON 2020/5/23
 */
const superagent = require('superagent');
const cheerio = require('cheerio');
const uuid = require('node-uuid');
const moment = require('moment');

const {responseClient} = require('../util');
const HanPigsDao = require('../daos/HanPigsDao');

const PATH = ['https://wuhuashe.com/pingdao/zuoping/page/2', 'http://www.skie.com.cn/']

module.exports = (req, res) => {
	// res.render('index', { title: 'Express' });

	// 用 superagent 去抓取 https://cnodejs.org/ 的内容
	superagent.get(PATH[0])
			.end((err, result) => {
				// 常规的错误处理
				if (err) {
					return responseClient(res, 200, 3, '请求失败', err)
				}

				// result.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
				// 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
				// 剩下就都是 jquery 的内容了
				let $ = cheerio.load(result.text);
				let items = [];

				try {
					$('section article').each(function (idx, element) {
						let $element = $(element);

						items.push({
							id: uuid.v1(),
							// img: $element.find('header h2 a').attr(''),
							title: $element.find('header h2 a').attr('href'),
							href: $element.find('header h2 a').attr('title'),
							createdDate: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
						});
					});
				} catch (e) {
					return responseClient(res, 500, false, '解析失败', {success: false, message: e})

				}


				HanPigsDao.bulkAdd(items)
						.then(() => {
							return responseClient(res, 200, true, '解析成功', {success: true})
						})
						.catch((err) => {
							return responseClient(res, 500, false, '解析失败', {success: false, message: err})
						})
			});
};
