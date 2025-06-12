

const QRCode = require('qrcode');

QRCode.toFile('qr_tesi.png', 'https://lorenzofuse.github.io/ring/', function (err) {
  if (err) throw err;
  console.log('QR code generato!');
});
