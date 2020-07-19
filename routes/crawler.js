/**
 * 爬取页面
 * create by hy ON 2020/5/23
 */
let superagent = require('superagent');
let cheerio = require('cheerio');
const {responseClient} = require('../util');

const PATH = ['http://www.hanpig.com/', 'http://www.skie.com.cn/']

module.exports = (req, res) => {
	// res.render('index', { title: 'Express' });

	// 用 superagent 去抓取 https://cnodejs.org/ 的内容
	superagent.get(PATH[1])
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
				$('.article-list .item').each(function (idx, element) {
					let $element = $(element);

					items.push({
						index: idx + 1,
						img: $element.find('img').attr('data-original'),
						title: $element.find('.item-title a').attr('href'),
						href: $element.find('.item-title a').attr('title'),
					});
				});
				return responseClient(res, 200, 3, '请求成功', items)
			});
};
