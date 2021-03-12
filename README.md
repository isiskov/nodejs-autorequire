## Motivation

  Avoid to repeat require statements in nodeJS.

## Features

  - auto require modules
  - no external modules needed

## install

  npm install nodejs-autorequire

## Get started

There are examples using `fs`, but you can use this package with anything else.

  const $ = require('nodejs-autoRequire');

  $.fs.readFile(__filename, function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data.toString());
  });


## License

  Licensed under [MIT](./LICENSE.md).
