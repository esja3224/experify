const creds = require('./credentials');
const mongoose = require('mongoose');
const routes = require('./routes');
const express = require('express');
const cors = require('cors');

const connString = `mongodb+srv://${creds.user}:${creds.password}@cluster0.z84b7.azure.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
	.connect(connString, { useNewUrlParser: true })
	.then(() => {
        const app = express();
        app.use(cors());
        app.use('/', routes);

		app.listen(9000, () => {
			console.log("Server has started!");
		})
	})