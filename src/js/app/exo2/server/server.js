const path = require('path');
const express = require('express');
const app = express;
const cors = require('cors');
const morgan = require('morgan');

const db = '../mock/posts.js';

app.set('port', 9095);

app.use(morgan('tiny'));

app.use(cors({
  origin: '*'
}));

app.get('api/blog/posts', function (req, res) {
  db.get('posts').find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

app.listen(app.get('port'), function () {
  console.log(`App listening at http://localhost:${app.get('port')}`);
});
