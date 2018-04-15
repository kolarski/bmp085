var sensor = bmp085({
  address: 0x77,
  mode: 3,
  units: 'metric'
}, function (err, sensor) {
  sensor.read(function (err, data) {
    // data is { pressure: 29.957463223223005, temp: 68.9 }
  });
});