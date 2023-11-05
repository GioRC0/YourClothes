const express = require('express');
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post")

const app = express();

//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', postRoutes);


app.get("/", (req, res) => {
    res.send("yo me la paso pensando en chamba");
});

require("./database");

app.listen(3000);
console.log('server on port', 3000);