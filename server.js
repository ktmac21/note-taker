//Required
const express = require('express');
const htmlRouter = require('./routes/routesHtml');
const apiRouter = require('./routes/routesApi'); 

const app = express(); 

//Set Ports
const PORT = process.env.PORT || 3001;

//Set Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.use(express.static('public'));
app.use('/api', apiRouter);
app.use('/', htmlRouter);


//Listen to Port
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT} `)
); 