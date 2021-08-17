const express = require('express');


const Port = process.env.PORT || 3001;

const app = express(); 



app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(__dirname + 'public'));
app.use(express.static('./')); 

require('./db/routes/routesApi.js')(app);
require('./db/routes/routesHtml.js')(app);





app.listen(Port, () => 
console.log(`App listening at http://localhost:${PORT} `)
);