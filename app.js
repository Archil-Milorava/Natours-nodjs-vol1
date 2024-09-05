const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
const PORT = 3000;

const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}/dev-data/data/tours-simple.json`,
    'utf-8',
    (err, data) => data
  )
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 200,
    result: tours.length,
    data: {
      tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  const id = Number(req.params.id);
  const singleTour = tours.filter((tour) => tour.id === id);

  res.status(200).json({
    status: 200,
    data: {
      tour: singleTour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 201,
        data: {
          tour: newTour,
        },
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
