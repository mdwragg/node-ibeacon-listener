var Bleacon = require('bleacon');

Bleacon.startScanning(); // scan for any bleacons

Bleacon.on('discover', function(bleacon) {
  console.log(bleacon.rssi + '    ' + bleacon.proximity + '    ' + bleacon.accuracy);
});
