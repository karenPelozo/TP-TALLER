const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('../models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});


app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
