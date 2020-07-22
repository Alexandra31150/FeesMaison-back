const express = require('express');
const cors = require('cors');
// const errorHandler = require('./utils/error-handler');

const app = express();
const PORT = process.env.PORT || (process.env.NODE_ENV === 'test' ? 3001 : 4000);

const creators = require('./routes/products');
const products = require('./routes/creators');

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/creator', creators);
app.use('/product', products);

const server = app.listen(PORT, () => {
  console.log(`🌍 Server is running on port ${PORT}`);
});

module.exports = server;
