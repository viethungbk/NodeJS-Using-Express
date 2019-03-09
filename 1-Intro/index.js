var express = require('express');

var app = express();

app.get('/', (request, response) => {
	response.send('Hi Hung');
});

app.get('/data', (request, response) => {
	response.send('data');
});

app.get('/info', (request, response) => {
	response.send('Dai hoc Bach Khoa Ha Noi');
});


var port = 3000;
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});