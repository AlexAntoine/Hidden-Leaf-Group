const express = require("express");
const path = require('path');
const pageRouter = require('./routes/pages');
const PORT = process.env.PORT || 3000
const app = express();

app.listen(PORT,(req, res)=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use(pageRouter)

app.use(express.static(path.join(__dirname, "public")));