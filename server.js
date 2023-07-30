
const localhost = 'localhost'
const host = '0.0.0.0';
const port = 5500;
let express = require('express');
let app = express();
let path = require('path');

let http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => {
 
    res.sendFile(__dirname + '/index.html');
 
});

http.listen(port, host, () => {
    console.log(`Server is running on http://${localhost}:${port}`);
});
