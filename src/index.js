const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post")
const commentRoutes = require("./routes/comment")

const app = express();

require("./database");
//middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.static('uploads'));

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes)


app.get("/", (req, res) => {
    res.send("yo me la paso pensando en chamba");
});

app.listen(3000);
console.log('server on port', 3000);