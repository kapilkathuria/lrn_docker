const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Docker Container - Hellossss from node api server");
});


// use port from dotenv, if not specified than use 3000
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
