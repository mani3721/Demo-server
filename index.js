const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const PostRoute = require("./Routes/PostRoute.js")

const app = express();
app.use(express.json());

app.use(cors());
dotenv.config();

mongoose.set('debug', true);
mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(process.env.PORT, () => console.log("successss")))
    .catch((error) => console.log(error));

// Routes
app.use("/post", PostRoute)
