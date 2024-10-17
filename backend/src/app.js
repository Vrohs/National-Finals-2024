// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const carbonCreditsRouter = require('./api/routes/carbonCredits');
const verificationRouter = require('./api/routes/verification');

const app = express();
const port = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));


app.use(express.json());

app.use('/api/carbon-credits', carbonCreditsRouter);
app.use('/api/verification', verificationRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});