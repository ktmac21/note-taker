const express = require('express');


const Port = pross.env.PORT || 3001;

const app = express(); 



app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(__dirname + 'public'));
app.use(express.static('./')); 

require('./routes/routesAPI')(app);
require('./routes/routesHTML')(app);





app.listen(Port, () => 
console.log(`App listening at http://localhost:${PORT} `)
);