const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.port || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/index.js'));
app.use('/api/movies', require('./routes/movies.js'));
app.use('/api/users', require('./routes/users.js'));

app.listen(app.get('port'), (req, res) => {
    console.log(`Server is listening in port ${app.get('port')}`);
});