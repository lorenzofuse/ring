const QRCode = require('qrcode');

QRCode.toFile('qr_tesi.png', 'https://github.com/lorenzofuse/ring/blob/main/ring.mp4', function (err) {
  if (err) throw err;
  console.log('QR code generato!');
});

const QRCode = require('qrcode');

QRCode.toFile('qr_tesi.png', 'https://lorenzofuse.github.io/ring/', function (err) {
  if (err) throw err;
  console.log('QR code generato!');
});
