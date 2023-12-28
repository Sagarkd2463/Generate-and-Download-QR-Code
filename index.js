const express = require('express');
const cors = require('cors');
const qrRouter = require('../server/qrcodeRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', qrRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening server on port: ${PORT}`);
});