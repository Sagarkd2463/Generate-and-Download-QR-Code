const QRCode = require('qrcode');

const scanQrcode = (req, res) => {
    const url = req.body.url;

    if(url.length === 0){
        res.send("Empty Data");
    }

    QRCode.toDataURL(url, (err, url) => {
        console.log(url);
        res.send(url);
    });
};


module.exports = scanQrcode;
