const express = require('express');
const toursRouter = require('./routes/toursRoute');
const usersRouter = require('./routes/userRoute');

const app = express();
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `There is no ${req.originalUrl} on this server`,
  });

  const err = new Error(`There is no ${req.originalUrl} on this server`);
  err.statusCode = 404;
  err.status = 'fail';
});

module.exports = app;
