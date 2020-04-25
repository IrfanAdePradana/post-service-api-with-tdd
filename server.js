const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config();

app.use(bodyParser.json({
    limit: '10mb',
}));

require('./routes/post.routes')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});