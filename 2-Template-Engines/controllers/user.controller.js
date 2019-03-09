var shortid = require('short-id');

var db = require('../db');

module.exports.index = function(req, res) {
	res.render('./users/user.pug', {
		users: db.get('users').value()
 	});
};

module.exports.search = function(req, res) {
	var users = db.get('users').value();
	var q = req.query.q;
	var filteredUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('./users/user.pug', {
		users: filteredUsers,
		value: q
	});
};

module.exports.create = function(req, res) {
	res.render('users/create');
};

module.exports.postCreate = function(req, res) {
	var values = req.body;

	values.id = shortid.generate();
	values.path = (req.file.path).split('/').splice(1).join('/');
	db.get('users')
		.push(values)
		.write();

	res.redirect('/users');
};

module.exports.get = function(req, res) {
	var id = req.params.id;

	var user = db.get('users').find({ "id": id }).value();

	res.render('./users/view.pug', {
		user: user
	});
};
