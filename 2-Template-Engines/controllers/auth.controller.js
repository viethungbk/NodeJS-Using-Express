var md5 = require('md5');
var db = require('../db');

module.exports.login = function(req, res) {
	res.render('auth/login');
};

module.exports.postLogin = function(req, res) {
	var email = req.body.email;
	var password = req.body.password;
	var hashedPassword = md5(password);

	var user = db.get('users')
		.find({ email: email })
		.value();

	if (!email) {
		res.render('auth/login', {
			errors: [
				'Email is required.'
			],
			values: req.body
		});
		return;
	}

	if (!password) {
		res.render('auth/login', {
			errors: [
				'Password is required.'
			],
			values: req.body
		});
		return;
	}

	if (!user) {
		res.render('auth/login', {
			errors: [
				'User does not exist.'
			],
			values: req.body
		});
		return;
	}

	if (user.password !== hashedPassword) {
		res.render('auth/login', {
			errors: [
				'Wrong password.'
			],
			values: req.body
		});
	}

	res.cookie('userId', user.id, {
		signed: true
	});

	res.redirect('/users');
}