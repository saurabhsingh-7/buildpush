const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile("index.html");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


