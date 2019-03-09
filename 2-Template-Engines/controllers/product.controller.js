var db = require('../db');

module.exports.index = function(req, res) {
	var page = parseInt(req.query.page) || 1;
	var perPage = 9;

	var start = (page - 1) * perPage;
	var end = start + perPage;

	res.render('./products/index.pug', {
		products: db.get('products').value().slice(start, end)
	});
}