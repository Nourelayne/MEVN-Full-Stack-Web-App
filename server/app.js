// imports

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

// DB Connection

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(()=> app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch(error => console.log(`${error} did not connect`));

// routes prefix

app.use("/api/post", require("./routes/routes"));