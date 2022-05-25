const express = require('express');
const path = require('path');
app = express();
port = 3000;
host = 'localhost';
app.use(express.static('C:/Users/ishan/Desktop/Code/webdev/proj/calculator/static'))

app.listen(port,host,()=>{
    `App listening at port ${port}`
})