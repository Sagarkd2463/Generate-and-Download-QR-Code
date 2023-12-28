const express = require('express');
const { scanQrcode } = require('./qrcodeController');
const qrRouter = express.Router();

qrRouter.post('/scanQrcode', scanQrcode);

module.exports = qrRouter;