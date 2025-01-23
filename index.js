const express = require('express');
const app = express();

//start server
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
})

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware - to parse request json body
app.use(express.json());
