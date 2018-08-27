//My Stedmens
const express = require('express');
const app= express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//require routers
const messageRouter=require('./routes/message.router');

//uses
app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/messages', messageRouter);



//Big Brother
app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);  
});

