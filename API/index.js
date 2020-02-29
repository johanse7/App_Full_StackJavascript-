const express = require('express');
const cors = require('cors');
const boom = require('@hapi/boom');
const { config } = require('./config');

const app = express();

const processText = require('./Routes/index');


const  corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

// body parser
app.use(express.json());
app.use(cors(corsOptions));

processText(app);

app.get('*', (request, response, next) => {
    next(boom.notFound())
});
app.listen(config.port, () => {
  console.log(`Server started! http://localhost:${config.port}`);
});
