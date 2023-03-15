const express = require('express');
const cors = require('cors');

const server = express();

const PORT = 5000;

server.use(cors({ origin: '*' }));
server.use(express.json());

server.listen(PORT, () => console.log(`listening on port ${PORT}`));

// server.use(json())

// endpoints

server.get('/getsum', (req, res) => {
	const { x, y } = req.query;
	return res.send(`${Number(x) + Number(y)}`);
});

server.post('/postsum', (req, res) => {
	const { x, y } = req.body;
	return res.send(`${Number(x) + Number(y)}`);
});
