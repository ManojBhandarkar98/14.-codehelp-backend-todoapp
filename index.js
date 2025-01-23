const express = require('express');
const app = express();

//start server
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
})
