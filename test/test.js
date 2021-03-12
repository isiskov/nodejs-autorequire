const $ = require('nodejs-autoRequire');

$.fs.readFile(__filename, function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString());
});
