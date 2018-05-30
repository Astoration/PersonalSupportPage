'use strict';

const path = require('path');

module.exports = {
  network: {
    host: '0.0.0.0',
    port: 8000,
    // HTTPS is not enabled by default, however, you can enable it by
    // filling the data below. You may have to specify SSL chain other than
    // certificate and the key, however.
    // https: { cert: fs.readFileSync(...), key: fs.readFileSync(...) },
  },
}

