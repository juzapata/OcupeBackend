const express = require('express');
const bodyParser = require('body-parser');
const cors = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => console.log("Servidor começou na porta 3000..."));

