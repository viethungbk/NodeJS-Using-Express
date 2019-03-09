module.exports.postCreate = (req, res, next) => {
	var values = req.body;
	var errors = [];
	if (!values.name) {
		errors.push('Name is required.');
	}

	if (!values.phone) {
		errors.push('Phone is required.');
	}

	if (errors.length) {
		res.render('./users/create.pug', {
			errors: errors,
			values: values
		});
		return;
	}

	next();
}