
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');





const {MONGOURI} = require('./keys'); 
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

app.get('/', (req, res) => {
    res.send("Welcome to the backend.")
});

app.use('/posts', postRoutes);
mongoose.set('useFindAndModify', false);


