const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE_URI.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('database connected'));



const PORT = dotenv.config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
